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
  {
    id: 'hyperliquid-tradebot',
    title: 'Hyperliquid Trade Bot',
    description: 'Decentralized exchange trading bot supporting multiple tokens including dreamcash, based, liquid, and aura. Features automated trading strategies.',
    techStack: ['Python', 'DeFi', 'Trading', 'API Integration'],
    githubUrl: 'https://github.com/tae9898/hyperliquid_tradebot',
    category: 'trading',
    featured: true,
  },
  {
    id: 'variational-01-tradebot',
    title: 'Variational 01 Trade Bot',
    description: 'Advanced trading bot for variational and 01.xyz protocols. Implements sophisticated trading algorithms for derivative markets.',
    techStack: ['Python', 'DeFi', 'Algorithmic Trading'],
    githubUrl: 'https://github.com/tae9898/variational_01_tradebot',
    category: 'trading',
    featured: false,
  },
  {
    id: 'trading-bot',
    title: 'Custom Trading Bot',
    description: 'Personal trading infrastructure with custom order execution, risk management, and portfolio tracking capabilities.',
    techStack: ['Python', 'Trading', 'Risk Management'],
    githubUrl: 'https://github.com/tae9898/trading_bot',
    category: 'trading',
    featured: false,
  },

  // Embedded Systems & Hardware (Featured)
  {
    id: 'arduino-pid-control',
    title: 'Arduino PID Control System',
    description: 'Closed-loop control system using Arduino with PID algorithm for precise temperature and motor control applications.',
    techStack: ['C++', 'Arduino', 'Embedded Systems', 'Control Theory'],
    githubUrl: 'https://github.com/tae9898/arduino-pid-control',
    category: 'embedded',
    featured: true,
  },
  {
    id: 'auto-pcb-quality-test',
    title: 'Automated PCB Quality Tester',
    description: 'Arduino-based automated testing system for PCB quality assurance. Implements electrical testing and fault detection for manufacturing.',
    techStack: ['C++', 'Arduino', 'Hardware Testing', 'Manufacturing'],
    githubUrl: 'https://github.com/tae9898/auto-pcb-quality-test-arduino-',
    category: 'embedded',
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
