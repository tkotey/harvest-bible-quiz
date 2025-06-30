# Harvest Bible Quiz 🌾

A beautifully designed Next.js bible quiz application where teams compete by answering questions from the Old and New Testament. Teams select point values (100-300) that determine question difficulty, with higher points representing more challenging questions. **Reap the rewards of biblical knowledge!**

## 🌾 Features

- **Multi-Team Competition**: Multiple teams take turns harvesting wisdom from Scripture
- **Question Limits**: Set how many questions each team can answer, with customizable limits per team
- **Harvest-Themed Design**: Professional UI with agricultural metaphors and beautiful gradients
- **Point-Based Difficulty**: 🌱100 (Easy), 🌾200 (Medium), 🌽300 (Hard) point questions
- **Comprehensive Question Bank**: 150 carefully crafted questions covering both Old and New Testament
- **Testament Selection**: Choose questions from Old or New Testament
- **Answer Reveal System**: Questions are revealed first, then answers after team discussion
- **Automatic Scoring**: Points awarded for correct answers, turn-based gameplay
- **Question Tracking**: Visual indicators show how many questions each team has remaining
- **Timer Controls**: Pause, reset, and close functionality for the question timer
- **Professional Design**: Modern, responsive interface with harvest-themed animations and effects
- **Local Gameplay**: Runs entirely on your local computer, no internet required during play

## 🎨 Visual Enhancements

### Harvest Theme
- **Agricultural Metaphors**: Seeds, harvest, fields, crops throughout the interface
- **Harvest Emojis**: 🌾 wheat, 🌽 corn, 🌱 seedlings, 🍂 autumn leaves
- **Thematic Language**: "Reap the rewards", "harvest wisdom", "seeds available"

### Modern Design
- **Beautiful Gradients**: Amber, orange, and yellow color schemes
- **Glass Effects**: Backdrop blur and transparency for professional appearance
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Professional Typography**: Enhanced fonts and visual hierarchy

## 🖥️ System Requirements

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Operating System**: Windows, macOS, or Linux
- **Browser**: Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Installation Instructions

### Step 1: Install Node.js
If you don't have Node.js installed:

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the setup wizard
4. Verify installation by opening a terminal/command prompt and typing:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Download the Application
1. Extract the provided `harvest-bible-quiz` folder to your desired location
2. Open a terminal/command prompt
3. Navigate to the application folder:
   ```bash
   cd path/to/harvest-bible-quiz
   ```

### Step 3: Install Dependencies
Run the following command to install required packages:
```bash
npm install
```

This will download all necessary dependencies (React, Next.js, Tailwind CSS, etc.)

### Step 4: Start the Harvest
Launch the development server:
```bash
npm run dev
```

You should see output similar to:
```
> harvest-bible-quiz@0.1.0 dev
> next dev
   ▲ Next.js 15.3.4
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.xxx:3000
 ✓ Ready in 1736ms
```

### Step 5: Begin Your Harvest
1. Open your web browser
2. Navigate to `http://localhost:3000`
3. The Harvest Bible Quiz application will load
4. Start harvesting biblical wisdom!

## 🌾 How to Harvest Knowledge

### Game Setup
1. **Enter Team Names**: Customize harvest-themed names for both teams
2. **Read the Harvest Rules**: Review the gameplay instructions
3. **Click "Begin the Harvest"**: Start your biblical journey

### Gameplay Flow
1. **Team Selection**: The current team is highlighted and ready to harvest
2. **Choose Your Field of Study**: Select a specific biblical book or "All Fields"
3. **Select Your Harvest**: Click on a point value to determine challenge level
   - 🌱 100 Points: Easy questions (seedling level - basic biblical knowledge)
   - 🌾 200 Points: Medium questions (wheat level - intermediate knowledge)  
   - 🌽 300 Points: Hard questions (corn level - detailed biblical knowledge)
   - 🍂 400 Points: Expert questions (harvest level - advanced biblical scholarship)
4. **Scripture Challenge**: The selected question appears with category and testament information
5. **Team Discussion**: Teams can discuss the answer before revealing
6. **Reveal the Harvest**: Click to see the correct response
7. **Harvest Results**: Select "Correct Harvest!" or "No Harvest" to award points
8. **Turn Switching**: The game automatically switches to the other team

### Scoring System
- **Correct Harvest**: Team receives the full point value of the question
- **No Harvest**: Team receives 0 points
- **Seed Tracking**: Questions are marked as used ("seeds planted")
- **Victory**: The team with the most points wins the harvest!

### Game Management
- **New Harvest**: Click the "New Harvest" button to start over with fresh scores
- **Seed Counter**: The interface shows how many seeds (questions) remain at each difficulty level

## 📚 Question Bank Details

The application includes 150 carefully researched bible questions covering:

### Old Testament Fields
- **Genesis**: Creation, Noah, Abraham, Jacob, Joseph
- **Exodus**: Moses, Ten Commandments, Plagues of Egypt
- **Psalms**: David's writings, famous verses, worship songs
- **Daniel**: Lion's den, Babylon, prophetic visions
- **Kings**: Solomon, David, Saul, kingdom history
- **Job**: Suffering, faith, divine restoration

### New Testament Fields
- **Matthew**: Birth of Jesus, Beatitudes, parables
- **Mark**: Jesus' ministry, miracles, discipleship
- **Luke**: Parables, birth narrative, compassion
- **John**: I AM statements, Lazarus, eternal life
- **Acts**: Early church, Paul's conversion, missions
- **Romans**: Salvation, faith, Christian living
- **Corinthians**: Love chapter, spiritual gifts, church unity
- **Ephesians**: Armor of God, grace, spiritual blessings
- **Philippians**: Joy, contentment, Christ's example
- **Hebrews**: Faith, Jesus as high priest, Old Testament fulfillment
- **James**: Practical faith, wisdom, good works
- **Peter**: Suffering, hope, Christian conduct
- **Revelation**: End times, seven churches, heavenly worship

## 🛠️ Technical Information

### Built With
- **Next.js 15.3.4**: React framework for production
- **React 18**: JavaScript library for user interfaces
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework with custom harvest theme
- **Custom Hooks**: React hooks for game state management

### Project Structure
```
harvest-bible-quiz/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── page.tsx         # Main harvest game page
│   │   ├── layout.tsx       # Root layout with harvest branding
│   │   └── globals.css      # Global styles with harvest theme
│   ├── components/          # React components
│   │   ├── GameSetup.tsx    # Harvest preparation interface
│   │   ├── ScoreBoard.tsx   # Harvest scoreboard
│   │   ├── GameBoard.tsx    # Field and harvest selection
│   │   └── QuestionDisplay.tsx # Scripture challenge display
│   ├── data/
│   │   └── questions.ts     # 150 bible questions
│   ├── hooks/
│   │   └── useGameState.ts  # Game state management
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   └── utils/
│       └── gameUtils.ts     # Utility functions
├── package.json             # Project dependencies
└── README.md               # This file
```

## 🎨 Design Features

### Harvest-Themed Visual Elements
- **Background**: Gradient from amber to orange with floating harvest emojis
- **Cards**: Glass effect with backdrop blur for modern appearance
- **Buttons**: Gradient backgrounds with hover animations
- **Typography**: Professional fonts with harvest-themed colors
- **Icons**: Agricultural emojis throughout (🌾🌽🌱🍂📜📖)

### Professional Animations
- **Smooth Transitions**: All state changes animated smoothly
- **Hover Effects**: Interactive elements respond to mouse interaction
- **Micro-interactions**: Subtle animations enhance user experience
- **Loading States**: Professional loading and transition effects

## 🔧 Troubleshooting

### Common Issues

**Application won't start:**
- Ensure Node.js is installed (`node --version`)
- Run `npm install` to install dependencies
- Check that the port isn't being used by another application

**Browser shows "This site can't be reached":**
- Verify the development server is running (`npm run dev`)
- Try `http://127.0.0.1:3000` instead of `http://localhost:3000`
- Check your firewall settings

**Questions not displaying correctly:**
- Refresh the browser page
- Clear browser cache and cookies
- Restart the development server

**Visual elements not appearing:**
- Ensure your browser supports modern CSS features
- Try using a different browser (Chrome, Firefox, Safari, Edge)
- Check if JavaScript is enabled in your browser

### Getting Help
If you encounter issues not covered here:
1. Check the terminal/command prompt for error messages
2. Try restarting the application (`Ctrl+C` to stop, then `npm run dev` to restart)
3. Ensure all files are properly extracted and in the correct locations

## 🎯 Customization

### Adding Questions
To add more questions, edit `src/data/questions.ts`:
1. Follow the existing question format
2. Assign appropriate difficulty levels (100, 200, 300, 400)
3. Include category and testament information
4. Ensure answers are accurate and concise

### Modifying Harvest Theme
The application uses Tailwind CSS with custom harvest styling:
- Edit component files in `src/components/` to change layouts
- Modify `src/app/globals.css` for global style changes
- Colors and gradients can be adjusted in the component files
- Harvest emojis can be changed throughout the components

### Changing Game Rules
Game logic is handled in `src/hooks/useGameState.ts`:
- Modify scoring rules and point values
- Add more teams or change team structure
- Implement time limits or other game mechanics
- Customize turn-based logic

## 📄 License

This application is provided for educational and personal use. The bible questions are based on public domain biblical texts. The harvest theme and visual design are original creations.

## 🌾 Version History

- **v2.0.0**: Major UI enhancement with harvest theme, professional design, and modern animations
- **v1.0.0**: Initial release with 150 questions, two-team gameplay, and complete feature set

---

## 🙏 Enjoy Your Harvest Bible Quiz!

**Reap the rewards of biblical knowledge together!** 🌾📖

This application is designed to be both educational and entertaining, making it perfect for:
- Church groups and Bible study sessions
- Family game nights and gatherings  
- Youth group activities and events
- Educational settings and Sunday schools
- Personal Bible study and review

*May your harvest of biblical wisdom be abundant!* 🌾✨

