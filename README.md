# Massachusetts Learner's Permit Test Simulation

A web-based simulation of the Massachusetts Registry of Motor Vehicles (RMV) Learner's Permit written test.

## Features

- **100+ Multiple-Choice Questions**: Large pool of questions covering all key topics from the manual
- **25 Random Questions Per Test**: Each test session randomly selects 25 questions
- **Timer**: 25-minute time limit matching the actual test
- **Instant Feedback**: Immediate feedback after each answer with correct/incorrect indication
- **Locked Answers**: Once selected, answers cannot be changed to encourage careful consideration
- **Manual Excerpts**: Relevant excerpts from the Massachusetts Driver's Manual explaining why answers are correct
- **Pass/Fail Results**: Must answer 18+ questions correctly to pass
- **Responsive Design**: Works on desktop and mobile devices
- **Navigation**: Previous/Next buttons to review questions
- **Official Styling**: Interface modeled after Massachusetts RMV design

## Test Flow

1. **Instructions**: Read test requirements and start
2. **Questions**: Answer each question (cannot change once selected)
3. **Instant Feedback**: See if answer is correct with manual excerpt
4. **Continue**: Click "Continue" to proceed to next question
5. **Results**: Final pass/fail score at completion

## Question Pool Topics

- License Requirements and Restrictions
- Learner's Permit Rules
- Rules of the Road and Traffic Laws
- Traffic Signals and Signs
- Parking Regulations
- Alcohol Misuse and DUI Laws
- Distracted Driving
- Highway Driving and Passing
- Weather Conditions (Rain, Fog, Snow, Ice)
- Road Markings and Lane Usage
- Emergency Situations
- Junior Operator License
- Vehicle Operation and Maintenance
- Safe Driving Practices
- Pedestrian and Bicycle Safety
- Speed Limits and Enforcement
- Right of Way
- Defensive Driving
- Accident Procedures

## How to Run

1. Ensure you have Python installed
2. Navigate to the project directory
3. Run: `python -m http.server 8000`
4. Open your browser to `http://localhost:8000`

## Files

- `index.html` - Main HTML structure
- `styles.css` - CSS styling with RMV-inspired design
- `script.js` - JavaScript logic for test functionality
- `Manual.txt` - Massachusetts Driver's Manual (source material)

## Test Requirements

- 25 questions total per session
- 18 correct answers required to pass
- 25-minute time limit
- Multiple choice format
- Random question selection from 100+ pool
- Covers Massachusetts-specific driving laws and regulations

## Educational Value

Each question includes an excerpt from the official Massachusetts Driver's Manual, helping users learn the reasoning behind correct answers and understand Massachusetts driving laws. Answers are locked once selected to encourage thoughtful decision-making.

## Disclaimer

This is a simulation for educational purposes only. It is not the official RMV test. For actual licensing requirements, visit the Massachusetts RMV website.