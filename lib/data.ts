// Project data structure for portfolio
export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
    category: 'embedded' | 'python-tools' | 'web' | 'config' | 'trading';
    featured: boolean;
}

export const projects: Project[] = [
    // Embedded Systems
    {
        id: 'nftables-migration',
        title: 'nftables Migration',
        description: 'Migrated iptables to nftables rule base for embedded network devices. Implemented port trigger, NAT, access control using maps, sets, and marks without kernel modules.',
        techStack: ['C', 'nftables', 'iptables', 'Linux Kernel', 'Networking'],
        githubUrl: '#',
        category: 'embedded',
        featured: true,
    },
    {
        id: 'hidden-debug-api',
        title: 'Hidden Debug API',
        description: 'Developed API for remote debugging without PC tools within LAN. Auto-saves logs and system info with encryption. Simplified execution via Python CLI tool.',
        techStack: ['C', 'Python', 'API', 'Encryption', 'Embedded Linux'],
        githubUrl: '#',
        category: 'embedded',
        featured: true,
    },

    // Trading & Prediction Market Bots (Featured)
    {
        id: 'prediction-market-bot',
        title: 'Prediction Market Bot',
        description: 'Automated trading bot for prediction markets including Polymarket. Implements market analysis, position management, and automated trading strategies.',
        techStack: ['Python', 'API Integration', 'Trading', 'Automation'],
        githubUrl: 'https://github.com/tae9898/Prediction_market_bot_Pulbic',
        category: 'trading',
        featured: true,
    },
    // Python Tools & Automation (Featured)
    {
        id: 'telegram-bot',
        title: 'Telegram Automation Bot',
        description: 'Multi-purpose Telegram bot for automation tasks including notifications, command processing, and integration with external services.',
        techStack: ['Python', 'Telegram API', 'Automation', 'Bot Development'],
        githubUrl: 'https://github.com/tae9898/telegram_bot',
        category: 'python-tools',
        featured: true,
    },
    {
        id: 'yolov5-billboard',
        title: 'YOLOv5 Billboard Detection',
        description: 'Computer vision application using YOLOv5 for detecting and analyzing billboards in images and video streams.',
        techStack: ['Python', 'PyTorch', 'YOLOv5', 'Computer Vision', 'Deep Learning'],
        githubUrl: 'https://github.com/tae9898/yolov5_billboard',
        category: 'python-tools',
        featured: false,
    },
    {
        id: 'ros-workspace',
        title: 'ROS Navigation Stack',
        description: 'Robot Operating System workspace with navigation stack implementation for autonomous robot navigation and path planning.',
        techStack: ['Python', 'ROS', 'Robotics', 'Navigation', 'SLAM'],
        githubUrl: 'https://github.com/tae9898/ros',
        category: 'python-tools',
        featured: false,
    },

    // Config
    {
        id: 'dotfiles',
        title: 'Development Environment Config',
        description: 'Personal development environment configuration including Neovim setup, shell aliases, and development tools.',
        techStack: ['Neovim', 'Lua', 'Shell', 'DevOps'],
        githubUrl: 'https://github.com/tae9898/tae9898',
        category: 'config',
        featured: false,
    },
];

// Categories for filtering
export const projectCategories = [
    { value: 'all', label: 'All Projects' },
    { value: 'embedded', label: 'Embedded Systems' },
    { value: 'python-tools', label: 'Python Tools' },
    { value: 'trading', label: 'Trading & DeFi' },
    { value: 'config', label: 'Config' },
] as const;

export type ProjectCategory = typeof projectCategories[number]['value'];
