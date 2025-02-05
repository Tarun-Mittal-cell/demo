// Initialize TradingView Widget
function initTradingViewWidget() {
    new TradingView.widget({
        "width": "100%",
        "height": 400,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview-chart"
    });
}

// Performance Metrics Chart
function initPerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Algorithm Performance',
                data: [99.2, 99.4, 99.6, 99.7, 99.8, 99.9],
                borderColor: '#00f2ff',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            },
            scales: {
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

// Market Sentiment Chart
function initSentimentChart() {
    const ctx = document.getElementById('sentimentChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Bullish', 'Neutral', 'Bearish'],
            datasets: [{
                data: [60, 25, 15],
                backgroundColor: [
                    '#00f2ff',
                    '#00a8ff',
                    '#0051ff'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

// Quantum Metrics Chart
function initQuantumMetricsChart() {
    const ctx = document.getElementById('quantumMetricsChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Speed', 'Accuracy', 'Efficiency', 'Reliability', 'Scalability'],
            datasets: [{
                label: 'Current Performance',
                data: [95, 98, 92, 96, 94],
                borderColor: '#00f2ff',
                backgroundColor: 'rgba(0, 242, 255, 0.2)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: '#fff'
                    },
                    ticks: {
                        color: '#fff',
                        backdropColor: 'transparent'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

// Quantum Performance Comparison Chart
function initQuantumPerformanceChart() {
    const ctx = document.getElementById('quantumPerformanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Traditional', 'AI-Enhanced', 'Quantum-Powered'],
            datasets: [{
                label: 'Processing Speed (ms)',
                data: [100, 10, 0.001],
                backgroundColor: [
                    '#0051ff',
                    '#00a8ff',
                    '#00f2ff'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'logarithmic',
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

// Initialize all charts when the page loads
window.addEventListener('load', () => {
    initTradingViewWidget();
    initPerformanceChart();
    initSentimentChart();
    initQuantumMetricsChart();
    initQuantumPerformanceChart();
});
