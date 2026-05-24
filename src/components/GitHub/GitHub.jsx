import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Cpu,
  ExternalLink,
  Code2,
  GitFork,
  Layers3,
  MapPin,
  RefreshCcw,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import "./GitHub.css";

const GITHUB_USER = "raz-88";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USER}`;
const GITHUB_API_BASE = `https://api.github.com/users/${GITHUB_USER}`;

const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  Dart: "#00B4AB",
  Shell: "#89e051",
};

const EVENT_LABELS = {
  PushEvent: "Pushed code",
  CreateEvent: "Created repo",
  PullRequestEvent: "Opened PR",
  IssuesEvent: "Opened issue",
  WatchEvent: "Star activity",
  ForkEvent: "Forked project",
  ReleaseEvent: "Published release",
};

const EVENT_ICONS = {
  PushEvent: <Cpu size={14} />,
  CreateEvent: <Sparkles size={14} />,
  PullRequestEvent: <ArrowUpRight size={14} />,
  IssuesEvent: <Activity size={14} />,
  WatchEvent: <Star size={14} />,
  ForkEvent: <GitFork size={14} />,
  ReleaseEvent: <Layers3 size={14} />,
};

function formatCompact(value) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value || 0);
}

function formatDate(value) {
  if (!value) return "Recent";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function getLanguageColor(language) {
  return LANGUAGE_COLORS[language] || "#9aa8b5";
}

function getEventLabel(type) {
  return EVENT_LABELS[type] || "Recent activity";
}

function getEventIcon(type) {
  return EVENT_ICONS[type] || <Activity size={14} />;
}

export default function GitHub() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadGithubData = async () => {
      try {
        setLoading(true);
        setError("");

        const [profileResponse, reposResponse, eventsResponse] = await Promise.all([
          fetch(GITHUB_API_BASE, { signal: controller.signal }),
          fetch(`${GITHUB_API_BASE}/repos?per_page=100&sort=updated`, { signal: controller.signal }),
          fetch(`${GITHUB_API_BASE}/events/public?per_page=30`, { signal: controller.signal }),
        ]);

        if (!profileResponse.ok || !reposResponse.ok || !eventsResponse.ok) {
          throw new Error("GitHub API request failed");
        }

        const [profileData, reposData, eventsData] = await Promise.all([
          profileResponse.json(),
          reposResponse.json(),
          eventsResponse.json(),
        ]);

        const visibleRepos = reposData
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }

            return new Date(b.updated_at) - new Date(a.updated_at);
          });

        setProfile(profileData);
        setRepos(visibleRepos);
        setEvents(eventsData);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError("GitHub data could not be loaded right now.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadGithubData();

    return () => controller.abort();
  }, []);

  const githubStats = useMemo(() => {
    const repoCount = profile?.public_repos ?? repos.length;
    const followers = profile?.followers ?? 0;
    const following = profile?.following ?? 0;
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
    const languageMap = repos.reduce((accumulator, repo) => {
      if (!repo.language) return accumulator;
      accumulator[repo.language] = (accumulator[repo.language] || 0) + 1;
      return accumulator;
    }, {});

    const topLanguageEntry = Object.entries(languageMap).sort((a, b) => b[1] - a[1])[0];
    const topLanguage = topLanguageEntry ? topLanguageEntry[0] : "Mixed";
    const topLanguageCount = topLanguageEntry ? topLanguageEntry[1] : 0;
    const activityCount = events.length;
    const latestEvent = events[0];

    return {
      repoCount,
      followers,
      following,
      totalStars,
      totalForks,
      topLanguage,
      topLanguageCount,
      activityCount,
      latestEvent,
      languageMap,
    };
  }, [events, profile, repos]);

  const languageBreakdown = useMemo(() => {
    const entries = Object.entries(githubStats.languageMap || {});
    const total = entries.reduce((sum, [, count]) => sum + count, 0) || 1;

    return entries
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([language, count]) => ({
        language,
        count,
        share: Math.round((count / total) * 100),
      }));
  }, [githubStats.languageMap]);

  const activityMatrix = useMemo(() => {
    const countsByDate = events.reduce((accumulator, event) => {
      const dateKey = new Date(event.created_at).toISOString().slice(0, 10);
      accumulator[dateKey] = (accumulator[dateKey] || 0) + 1;
      return accumulator;
    }, {});

    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - (41 - index));
      const dateKey = date.toISOString().slice(0, 10);
      const count = countsByDate[dateKey] || 0;

      return {
        dateKey,
        count,
      };
    });
  }, [events]);

  const topRepos = repos.slice(0, 4);

  return (
    <div className="github-page">
      <div className="github-orb github-orb-a" />
      <div className="github-orb github-orb-b" />

      <div className="page-inner github-inner">
        <span className="section-tag">Open Source</span>
        <h2 className="section-title">GitHub Signal</h2>
        <p className="section-sub">Live profile data, repository activity, and technology patterns.</p>
        <div className="divider"></div>

        <section className="github-hero card reveal visible">
          <div className="github-hero-top">
            <div className="github-profile-block">
              <div className="github-avatar-wrap">
                {profile?.avatar_url ? (
                  <img className="github-avatar" src={profile.avatar_url} alt={`${profile.name || GITHUB_USER} avatar`} />
                ) : (
                  <div className="github-avatar github-avatar-fallback">
                    <Code2 size={34} />
                  </div>
                )}
                <span className="github-live-pill">
                  <span className="github-live-dot" />
                  Live data
                </span>
              </div>

              <div className="github-profile-copy">
                <p className="github-kicker">Public GitHub telemetry</p>
                <h3>{profile?.name || "Rajnandan Yadav"}</h3>
                <p className="github-bio">
                  {profile?.bio || "Exploring full-stack development, IoT systems, and practical product builds with real-world feedback."}
                </p>

                <div className="github-meta-row">
                  <span>
                    <MapPin size={14} />
                    {profile?.location || "India"}
                  </span>
                  <span>
                    <Users size={14} />
                    {formatCompact(githubStats.followers)} followers
                  </span>
                  <span>
                    <Activity size={14} />
                    {githubStats.activityCount} public events
                  </span>
                </div>
              </div>
            </div>

            <div className="github-hero-actions">
              <a className="btn btn-primary github-btn-primary" href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                Open Profile <ExternalLink size={16} />
              </a>
              <a className="btn btn-outline github-btn-outline" href={`${GITHUB_PROFILE_URL}?tab=repositories`} target="_blank" rel="noopener noreferrer">
                Repositories <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="github-hero-footer">
            <div className="github-hero-chip">
              <Sparkles size={14} />
              {githubStats.topLanguage} is the strongest signal across this profile
            </div>
            <div className="github-hero-chip">
              <RefreshCcw size={14} />
              {githubStats.latestEvent ? `Last public event: ${formatDate(githubStats.latestEvent.created_at)}` : "Waiting for recent public events"}
            </div>
          </div>
        </section>

        <section className="github-stats-grid">
          <article className="github-stat-card card reveal visible">
            <div className="github-stat-icon">
              <Code2 size={18} />
            </div>
            <div className="github-stat-num">{loading ? "..." : formatCompact(githubStats.repoCount)}</div>
            <div className="github-stat-lbl">Public repositories</div>
          </article>

          <article className="github-stat-card card reveal visible">
            <div className="github-stat-icon">
              <Star size={18} />
            </div>
            <div className="github-stat-num">{loading ? "..." : formatCompact(githubStats.totalStars)}</div>
            <div className="github-stat-lbl">Stars across repositories</div>
          </article>

          <article className="github-stat-card card reveal visible">
            <div className="github-stat-icon">
              <GitFork size={18} />
            </div>
            <div className="github-stat-num">{loading ? "..." : formatCompact(githubStats.totalForks)}</div>
            <div className="github-stat-lbl">Forks and clones</div>
          </article>

          <article className="github-stat-card card reveal visible">
            <div className="github-stat-icon">
              <Users size={18} />
            </div>
            <div className="github-stat-num">{loading ? "..." : formatCompact(githubStats.followers)}</div>
            <div className="github-stat-lbl">Followers</div>
          </article>
        </section>

        <div className="github-dashboard">
          <section className="github-panel card reveal visible">
            <div className="github-panel-head">
              <div>
                <p className="github-panel-kicker">Language mix</p>
                <h4>What the codebase is built with</h4>
              </div>
              <span className="github-panel-badge">{githubStats.topLanguageCount} top repos</span>
            </div>

            <div className="github-language-list">
              {languageBreakdown.length > 0 ? (
                languageBreakdown.map((item) => (
                  <div key={item.language} className="github-language-row">
                    <div className="github-language-topline">
                      <span className="github-language-name">
                        <span className="github-language-dot" style={{ background: getLanguageColor(item.language) }} />
                        {item.language}
                      </span>
                      <span className="github-language-count">{item.count} repos</span>
                    </div>
                    <div className="github-language-bar">
                      <div
                        className="github-language-fill"
                        style={{ width: `${Math.max(item.share, 12)}%`, background: `linear-gradient(90deg, ${getLanguageColor(item.language)}, #9cc7ff)` }}
                      />
                    </div>
                    <div className="github-language-share">{item.share}% of visible repositories</div>
                  </div>
                ))
              ) : (
                <div className="github-empty-state">Language data appears once public repositories are loaded.</div>
              )}
            </div>
          </section>

          <section className="github-panel card reveal visible">
            <div className="github-panel-head">
              <div>
                <p className="github-panel-kicker">Recent activity</p>
                <h4>Public event stream</h4>
              </div>
              <span className="github-panel-badge">{githubStats.activityCount} events</span>
            </div>

            <div className="github-activity-grid" aria-label="Recent public activity heat map">
              {activityMatrix.map((cell) => (
                <span
                  key={cell.dateKey}
                  className={`github-activity-cell github-activity-${Math.min(cell.count, 4)}`}
                  title={`${cell.dateKey}: ${cell.count} events`}
                />
              ))}
            </div>

            <div className="github-activity-legend">
              <span>Less</span>
              <span className="github-activity-swatch github-activity-0" />
              <span className="github-activity-swatch github-activity-1" />
              <span className="github-activity-swatch github-activity-2" />
              <span className="github-activity-swatch github-activity-3" />
              <span className="github-activity-swatch github-activity-4" />
              <span>More</span>
            </div>

            <div className="github-activity-list">
              {events.length > 0 ? (
                events.slice(0, 4).map((event) => (
                  <div key={event.id} className="github-activity-item">
                    <div className="github-activity-icon">{getEventIcon(event.type)}</div>
                    <div className="github-activity-copy">
                      <div className="github-activity-title">{getEventLabel(event.type)}</div>
                      <div className="github-activity-sub">
                        {event.repo?.name || "Unknown repository"} · {formatDate(event.created_at)}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="github-empty-state">Recent public activity will appear here once GitHub returns events.</div>
              )}
            </div>
          </section>
        </div>

        <section className="github-repos-panel card reveal visible">
          <div className="github-panel-head">
            <div>
              <p className="github-panel-kicker">Featured repositories</p>
              <h4>Top public projects</h4>
            </div>
            <a href={`${GITHUB_PROFILE_URL}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="github-panel-link">
              Browse all <ExternalLink size={14} />
            </a>
          </div>

          <div className="github-repos-grid">
            {topRepos.length > 0 ? (
              topRepos.map((repo) => (
                <article key={repo.id} className="github-repo-card">
                  <div className="github-repo-top">
                    <div>
                      <div className="github-repo-name">
                        <Code2 size={15} />
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          {repo.name}
                        </a>
                      </div>
                      <div className="github-repo-desc">{repo.description || "Public project with no description provided yet."}</div>
                    </div>
                    <span className="github-repo-badge">Public</span>
                  </div>

                  <div className="github-repo-meta">
                    <span>
                      <span className="gh-dot" style={{ background: getLanguageColor(repo.language) }} />
                      {repo.language || "Code"}
                    </span>
                    <span>
                      <Star size={13} /> {formatCompact(repo.stargazers_count)}
                    </span>
                    <span>
                      <GitFork size={13} /> {formatCompact(repo.forks_count)}
                    </span>
                  </div>

                  <div className="github-repo-footer">
                    <span className="github-repo-updated">Updated {formatDate(repo.updated_at)}</span>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="github-repo-link">
                      View repo <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="github-empty-state">Loading repository snapshots from GitHub.</div>
            )}
          </div>
        </section>

        <div className="github-cta-row">
          <div className="github-cta-copy">
            <span className="github-cta-kicker">Direct source</span>
            <h4>Everything above is pulled from the public GitHub API.</h4>
            <p>
              This section refreshes live on page load, so the numbers, repositories, and activity stay tied to the real profile rather than a hardcoded mockup.
            </p>
          </div>
          <a className="btn btn-outline github-cta-btn" href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">
            Open GitHub <ExternalLink size={16} />
          </a>
        </div>

        {error && <div className="github-error-state">{error}</div>}
      </div>
    </div>
  );
}


