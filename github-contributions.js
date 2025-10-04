// GitHub Contributions - Exact GitHub Style
class GitHubContributions {
    constructor() {
        this.config = {
            username: 'raz-88', // CHANGE TO YOUR USERNAME
            colors: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        };
        this.contributionsData = null;
    }

    async init() {
        try {
            this.showLoading();
            await this.fetchContributions();
            this.render();
            this.updateLastUpdated();
        } catch (error) {
            console.error('Failed to load GitHub contributions:', error);
            this.showError(error.message);
        }
    }

    async fetchContributions() {
        // Try to get data from cache first
        const cached = this.getCachedData();
        if (cached) {
            this.contributionsData = cached;
            return;
        }

        // Fetch from GitHub API
        await this.fetchFromGitHubAPI();
    }

    async fetchFromGitHubAPI() {
        const events = await this.fetchGitHubEvents();
        this.contributionsData = this.processEvents(events);
        this.cacheData();
    }

    async fetchGitHubEvents() {
        const response = await fetch(`https://api.github.com/users/${this.config.username}/events?per_page=300`);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const events = await response.json();
        console.log(`Fetched ${events.length} events from GitHub`);
        return events;
    }

    processEvents(events) {
        const contributions = {};
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        oneYearAgo.setDate(oneYearAgo.getDate() - 14); // GitHub shows ~1.25 years

        // Count contributions by date
        events.forEach(event => {
            const eventDate = new Date(event.created_at);
            if (eventDate >= oneYearAgo) {
                const dateKey = eventDate.toISOString().split('T')[0];
                contributions[dateKey] = (contributions[dateKey] || 0) + 1;
            }
        });

        // Fill complete dataset for the last ~1.25 years (GitHub style)
        const startDate = new Date();
        startDate.setFullYear(startDate.getFullYear() - 1);
        startDate.setDate(startDate.getDate() - 14); // 379 days total

        const endDate = new Date();
        const filledContributions = {};

        for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
            const dateKey = date.toISOString().split('T')[0];
            filledContributions[dateKey] = contributions[dateKey] || 0;
        }

        return filledContributions;
    }

    render() {
        const container = document.getElementById('github-contributions-container');
        if (!container) return;

        const data = this.getGridData();
        
        container.innerHTML = this.generateHTML(data);
        this.attachEventListeners();
    }

    getGridData() {
        const gridData = [];
        const today = new Date();
        const startDate = new Date();
        startDate.setFullYear(startDate.getFullYear() - 1);
        startDate.setDate(startDate.getDate() - 14); // 379 days

        let currentDate = new Date(startDate);
        
        while (currentDate <= today) {
            const dateKey = currentDate.toISOString().split('T')[0];
            const count = this.contributionsData[dateKey] || 0;
            
            let level = 0;
            if (count > 0) {
                if (count <= 3) level = 1;
                else if (count <= 6) level = 2;
                else if (count <= 9) level = 3;
                else level = 4;
            }

            gridData.push({
                date: new Date(currentDate),
                dateKey: dateKey,
                count: count,
                level: level,
                dayOfWeek: currentDate.getDay()
            });

            currentDate.setDate(currentDate.getDate() + 1);
        }

        return gridData;
    }

    generateHTML(data) {
        const stats = this.calculateStats(data);
        const monthsHTML = this.generateMonthsHTML();
        const daysHTML = this.generateDaysHTML();
        const squaresHTML = this.generateSquaresHTML(data);
        const statsHTML = this.generateStatsHTML(stats);

        return `
            <div class="contributions-calendar">
                <div class="contributions-months">${monthsHTML}</div>
                <div class="contributions-grid">
                    <div class="contributions-days">${daysHTML}</div>
                    <div class="contributions-squares">${squaresHTML}</div>
                </div>
                ${statsHTML}
                <div class="contributions-footer">
                    <div class="contributions-legend">
                        <span class="legend-text">Less</span>
                        <div class="legend-squares">
                            <div class="legend-square less"></div>
                            <div class="legend-square" style="background: #9be9a8"></div>
                            <div class="legend-square" style="background: #40c463"></div>
                            <div class="legend-square" style="background: #30a14e"></div>
                            <div class="legend-square more"></div>
                        </div>
                        <span class="legend-text">More</span>
                    </div>
                    <a href="https://github.com/${this.config.username}" 
                       class="contributions-learn-more" 
                       target="_blank">
                        Learn how we count contributions
                    </a>
                </div>
            </div>
        `;
    }

    generateMonthsHTML() {
        const months = [];
        const today = new Date();
        
        // Generate last 12 months
        for (let i = 11; i >= 0; i--) {
            const month = new Date();
            month.setMonth(today.getMonth() - i);
            months.push(this.config.months[month.getMonth()]);
        }
        
        // GitHub shows about 4-5 month labels
        return months.filter((_, index) => index % 3 === 0)
                    .map(month => `<span class="month-label">${month}</span>`)
                    .join('');
    }

    generateDaysHTML() {
        // GitHub shows only 2 day labels
        return ['', 'Mon', '', 'Wed', '', 'Fri', '']
            .map(day => `<div class="day-label">${day}</div>`)
            .join('');
    }

    generateSquaresHTML(data) {
        return data.map(day => {
            const dateStr = day.date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            const contributionText = day.count === 1 ? 'contribution' : 'contributions';
            
            return `
                <div class="contribution-day" 
                     data-level="${day.level}" 
                     data-date="${day.dateKey}"
                     data-count="${day.count}">
                    <div class="contribution-tooltip">
                        ${day.count} ${contributionText} on ${dateStr}
                    </div>
                </div>
            `;
        }).join('');
    }

    generateStatsHTML(stats) {
        return `
            <div class="contributions-stats">
                <div class="stat-item">
                    <span class="stat-number">${stats.total}</span>
                    <span class="stat-label">contributions in the last year</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${stats.longestStreak}</span>
                    <span class="stat-label">day longest streak</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${stats.currentStreak}</span>
                    <span class="stat-label">day current streak</span>
                </div>
            </div>
        `;
    }

    calculateStats(data) {
        let total = 0;
        let currentStreak = 0;
        let longestStreak = 0;
        let tempStreak = 0;
        const today = new Date().toDateString();

        // Calculate total and streaks
        for (let i = data.length - 1; i >= 0; i--) {
            const day = data[i];
            total += day.count;

            if (day.count > 0) {
                tempStreak++;
                // If this is today or yesterday, count towards current streak
                const dayDate = day.date.toDateString();
                if (dayDate === today || 
                    new Date(day.date.getTime() + 86400000).toDateString() === today) {
                    currentStreak = tempStreak;
                }
            } else {
                longestStreak = Math.max(longestStreak, tempStreak);
                tempStreak = 0;
            }
        }

        longestStreak = Math.max(longestStreak, tempStreak);

        return {
            total,
            currentStreak: currentStreak || 0,
            longestStreak
        };
    }

    attachEventListeners() {
        // Tooltip positioning can be enhanced here if needed
    }

    showLoading() {
        const container = document.getElementById('github-contributions-container');
        if (container) {
            container.innerHTML = '<div class="contributions-loading">Loading contributions...</div>';
        }
    }

    showError(message) {
        const container = document.getElementById('github-contributions-container');
        if (container) {
            container.innerHTML = `
                <div class="contributions-error">
                    <div>Failed to load contributions</div>
                    <div style="font-size: 12px; margin-top: 4px; color: var(--text-secondary);">
                        ${message}
                    </div>
                    <button class="btn" onclick="githubContributions.init()">
                        Try Again
                    </button>
                </div>
            `;
        }
    }

    getCachedData() {
        try {
            const cached = localStorage.getItem(`gh_contributions_${this.config.username}`);
            const timestamp = localStorage.getItem(`gh_contributions_${this.config.username}_time`);
            
            if (cached && timestamp) {
                const cacheTime = new Date(timestamp);
                const now = new Date();
                const hoursDiff = (now - cacheTime) / (1000 * 60 * 60);
                
                if (hoursDiff < 2) { // 2 hour cache
                    return JSON.parse(cached);
                }
            }
        } catch (error) {
            console.log('No cache available');
        }
        return null;
    }

    cacheData() {
        try {
            localStorage.setItem(`gh_contributions_${this.config.username}`, JSON.stringify(this.contributionsData));
            localStorage.setItem(`gh_contributions_${this.config.username}_time`, new Date().toISOString());
        } catch (error) {
            console.log('Could not cache data');
        }
    }

    updateLastUpdated() {
        const element = document.getElementById('contributions-last-updated');
        if (element) {
            element.textContent = new Date().toLocaleTimeString();
        }
    }
}

// Initialize
const githubContributions = new GitHubContributions();

document.addEventListener('DOMContentLoaded', function() {
    githubContributions.init();
});

// Manual refresh
window.refreshGitHubContributions = function() {
    githubContributions.init();
};