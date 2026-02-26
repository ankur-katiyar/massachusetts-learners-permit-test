// Massachusetts Learner's Permit Test Simulation
const allQuestions = [
    {
        question: "What is the minimum age to apply for a learner's permit in Massachusetts?",
        options: ["14 years old", "15 years old", "16 years old", "17 years old"],
        correct: 2,
        topic: "License Requirements",
        excerpt: "You must be at least 16 years old to apply for a Class D or M learner's permit."
    },
    {
        question: "When driving with a learner's permit, you must be accompanied by:",
        options: ["A licensed driver 21 years or older", "Any licensed adult", "A parent or guardian", "A licensed driver 18 years or older with at least 1 year of driving experience"],
        correct: 3,
        topic: "Learner's Permit",
        excerpt: "You must be accompanied by a licensed driver who is at least 18 years old and has held a valid license for at least one year."
    },
    {
        question: "What is the speed limit in a residential area unless otherwise posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correct: 1,
        topic: "Rules of the Road",
        excerpt: "Unless posted otherwise, your speed would not be reasonable and proper if you drive over... 30 mph in a thickly settled or business district (unless there are signs showing a 25 mph limit)."
    },
    {
        question: "When can you make a right turn on red?",
        options: ["Never", "After coming to a complete stop and yielding to traffic", "Only during daylight hours", "Only if there is no sign prohibiting it"],
        correct: 1,
        topic: "Rules of the Road",
        excerpt: "You may turn right on red after coming to a complete stop and yielding the right-of-way to oncoming traffic and pedestrians."
    },
    {
        question: "What does a flashing yellow light mean?",
        options: ["Stop completely", "Yield to oncoming traffic", "Slow down and proceed with caution", "Speed up to clear the intersection"],
        correct: 2,
        topic: "Traffic Signals",
        excerpt: "A flashing yellow light warns you to slow down and proceed with caution."
    },
    {
        question: "When parking uphill on a road with a curb, turn your wheels:",
        options: ["Toward the curb", "Away from the curb", "Straight ahead", "It doesn't matter"],
        correct: 1,
        topic: "Parking",
        excerpt: "When parking uphill on a road with a curb, turn your wheels to the left (away from the curb) so that if the vehicle rolls, it will roll away from traffic."
    },
    {
        question: "What is the legal blood alcohol concentration (BAC) limit for drivers 21 and older?",
        options: ["0.05%", "0.08%", "0.10%", "0.15%"],
        correct: 1,
        topic: "Alcohol Misuse",
        excerpt: "All drivers will fail a chemical test if they have a Blood Alcohol Content (BAC) of 0.08 or greater."
    },
    {
        question: "Teen drivers under 18 cannot use electronic devices while driving, even hands-free.",
        options: ["True", "False"],
        correct: 0,
        topic: "Distracted Driving",
        excerpt: "Teen drivers are not allowed to use any electronic devices, even in hands-free mode."
    },
    {
        question: "What should you do if you miss your exit on a highway?",
        options: ["Stop and back up", "Make a U-turn", "Continue to the next exit", "Cross the median"],
        correct: 2,
        topic: "Highway Driving",
        excerpt: "If you miss your exit, continue to the next exit and safely re-enter the highway or turn around at an appropriate location."
    },
    {
        question: "When driving in fog, you should:",
        options: ["Use high beam headlights", "Use low beam headlights", "Turn on hazard lights", "Drive faster to get out of it"],
        correct: 1,
        topic: "Weather Conditions",
        excerpt: "When driving in fog, use low beam headlights and reduce your speed to match visibility conditions."
    },
    {
        question: "A solid white line on the road means:",
        options: ["No passing allowed", "Passing allowed with caution", "Lane change allowed", "Stop line"],
        correct: 0,
        topic: "Road Markings",
        excerpt: "A solid white line separates lanes of traffic moving in the same direction and indicates that crossing is not allowed."
    },
    {
        question: "When can you drive in a carpool lane (HOV)?",
        options: ["When you have at least one passenger", "Only during rush hour", "When displaying a special permit", "Never, unless authorized"],
        correct: 0,
        topic: "Special Lanes",
        excerpt: "High Occupancy Vehicle (HOV) lanes are for vehicles with at least one passenger besides the driver."
    },
    {
        question: "What does a green arrow signal mean?",
        options: ["Stop", "Yield", "Protected turn in the direction of the arrow", "General caution"],
        correct: 2,
        topic: "Traffic Signals",
        excerpt: "A green arrow indicates a protected turn in the direction shown by the arrow."
    },
    {
        question: "You must yield to pedestrians:",
        options: ["Only at crosswalks", "In all situations", "Only when they are in the roadway", "Only during daylight"],
        correct: 1,
        topic: "Pedestrians",
        excerpt: "You must yield to pedestrians at all times, whether they are in a crosswalk or not."
    },
    {
        question: "When parallel parking, your vehicle should be within how many inches of the curb?",
        options: ["6 inches", "12 inches", "18 inches", "24 inches"],
        correct: 2,
        topic: "Parking",
        excerpt: "When parallel parking, your vehicle should be no more than 18 inches from the curb."
    },
    {
        question: "What should you do if your brakes fail?",
        options: ["Pump the brakes rapidly", "Shift to a lower gear and use the parking brake", "Turn off the engine", "Swerve to avoid traffic"],
        correct: 1,
        topic: "Emergency Situations",
        excerpt: "If your brakes fail, shift to a lower gear and apply the parking brake gradually to slow down."
    },
    {
        question: "A learner's permit is valid for:",
        options: ["6 months", "1 year", "2 years", "Until you turn 18"],
        correct: 1,
        topic: "Learner's Permit",
        excerpt: "A learner's permit is valid for one year from the date of issuance."
    },
    {
        question: "When driving downhill, you should:",
        options: ["Coast in neutral", "Use a lower gear", "Ride the brakes", "Speed up"],
        correct: 1,
        topic: "Driving Techniques",
        excerpt: "When driving downhill, use a lower gear to help control your speed and avoid brake overuse."
    },
    {
        question: "What does a diamond-shaped sign indicate?",
        options: ["Stop", "Yield", "Warning or caution", "Regulatory"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "Diamond-shaped signs are warning signs that alert you to potential hazards ahead."
    },
    {
        question: "You must stop at least how many feet before a railroad crossing?",
        options: ["10 feet", "15 feet", "25 feet", "50 feet"],
        correct: 1,
        topic: "Railroad Crossings",
        excerpt: "You must stop at least 15 feet, but not more than 50 feet, from the nearest rail at a railroad crossing."
    },
    {
        question: "When can you use your horn?",
        options: ["To greet friends", "To alert others of your presence", "To express frustration", "Continuously in traffic"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Use your horn only when necessary to alert others of your presence or to avoid a collision."
    },
    {
        question: "What is hydroplaning?",
        options: ["Driving too fast in rain", "When tires lose contact with the road due to water", "Skidding on ice", "Oversteering"],
        correct: 1,
        topic: "Weather Conditions",
        excerpt: "Hydroplaning occurs when tires lose contact with the road surface due to standing water."
    },
    {
        question: "A Junior Operator License (JOL) restricts driving between:",
        options: ["6 AM and 10 PM", "12:30 AM and 5:00 AM", "8 AM and 12 AM", "9 AM and 1 AM"],
        correct: 1,
        topic: "Junior Operator License",
        excerpt: "Junior Operators may not operate a motor vehicle between 12:30 a.m. and 5:00 a.m. unless accompanied by a parent or guardian."
    },
    {
        question: "When should you use your headlights?",
        options: ["Only at night", "From sunset to sunrise and in poor visibility", "Only in cities", "Whenever you want"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "You must use headlights from one-half hour after sunset to one-half hour before sunrise, and at any time when visibility is reduced."
    },
    {
        question: "What does a red octagon sign mean?",
        options: ["Yield", "Stop", "No entry", "Do not enter"],
        correct: 1,
        topic: "Road Signs",
        excerpt: "An octagon-shaped sign with the word 'STOP' means you must come to a complete stop."
    },
    {
        question: "What does a red octagon sign mean?",
        options: ["Yield", "Stop", "No entry", "Do not enter"],
        correct: 1,
        topic: "Road Signs",
        excerpt: "An octagon-shaped sign with the word 'STOP' means you must come to a complete stop."
    },
    {
        question: "When are you required to wear a seat belt in Massachusetts?",
        options: ["Only on highways", "Only when traveling over 30 mph", "At all times when the vehicle is in motion", "Only in the front seat"],
        correct: 2,
        topic: "Safety",
        excerpt: "Massachusetts law requires all occupants of a motor vehicle to wear seat belts at all times when the vehicle is in motion."
    },
    {
        question: "What is the minimum following distance you should maintain in ideal conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correct: 2,
        topic: "Safe Driving",
        excerpt: "You should maintain at least a 3-second following distance in ideal conditions to allow time to react to hazards."
    },
    {
        question: "When can you drive faster than the posted speed limit?",
        options: ["Never", "When passing another vehicle", "When the road is clear", "In emergencies only"],
        correct: 0,
        topic: "Speed Limits",
        excerpt: "You should never drive faster than the posted speed limit, even if conditions seem safe."
    },
    {
        question: "What should you do if you are being tailgated?",
        options: ["Speed up", "Maintain your speed and increase following distance", "Slam on brakes", "Move to the left lane"],
        correct: 1,
        topic: "Defensive Driving",
        excerpt: "If being tailgated, maintain your speed and increase your following distance to the vehicle ahead."
    },
    {
        question: "When are you allowed to use your cell phone while driving?",
        options: ["Never", "Only for emergencies", "Only when using hands-free mode", "Only when stopped at red lights"],
        correct: 2,
        topic: "Distracted Driving",
        excerpt: "Drivers are prohibited from using any electronic device unless it is used in hands-free mode."
    },
    {
        question: "What does a green light mean?",
        options: ["Stop", "Yield", "Go", "Caution"],
        correct: 2,
        topic: "Traffic Signals",
        excerpt: "A green light means you may proceed through the intersection if it is clear."
    },
    {
        question: "When should you use your high beam headlights?",
        options: ["In fog", "On rural roads at night", "In city traffic", "When following closely"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Use high beams on rural roads at night when there are no oncoming vehicles."
    },
    {
        question: "What is the penalty for a first offense of driving under the influence?",
        options: ["Warning only", "Fine and license suspension", "Jail time", "Community service"],
        correct: 1,
        topic: "Alcohol Misuse",
        excerpt: "Driving under the influence results in fines and license suspension."
    },
    {
        question: "When should you yield to emergency vehicles?",
        options: ["Only when they have lights flashing", "Only on highways", "Immediately when you hear sirens", "Only when they are behind you"],
        correct: 0,
        topic: "Emergency Vehicles",
        excerpt: "You must yield to emergency vehicles with flashing lights and sirens by pulling to the right and stopping."
    },
    {
        question: "What does a diamond-shaped yellow sign indicate?",
        options: ["Stop", "Yield", "Construction zone", "School zone"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "Diamond-shaped signs are used for construction, maintenance, or other road work warnings."
    },
    {
        question: "When can you make a U-turn?",
        options: ["Anywhere", "Only at intersections", "Only where permitted by signs", "On highways"],
        correct: 2,
        topic: "Maneuvers",
        excerpt: "U-turns are only allowed where permitted by signs and where they can be made safely."
    },
    {
        question: "What should you do if your vehicle starts to skid?",
        options: ["Brake hard", "Turn into the skid", "Accelerate", "Do nothing"],
        correct: 1,
        topic: "Emergency Situations",
        excerpt: "If your vehicle skids, turn the steering wheel in the direction of the skid and avoid braking."
    },
    {
        question: "When are you required to use headlights?",
        options: ["Only at night", "From sunset to sunrise", "When visibility is less than 500 feet", "All of the above"],
        correct: 3,
        topic: "Vehicle Operation",
        excerpt: "Headlights must be used from sunset to sunrise and whenever visibility is reduced."
    },
    {
        question: "What is the speed limit in a school zone when children are present?",
        options: ["25 mph", "20 mph", "15 mph", "30 mph"],
        correct: 1,
        topic: "Speed Limits",
        excerpt: "The speed limit in school zones is 20 mph when children are present or signs indicate active school hours."
    },
    {
        question: "When should you use the two-second rule?",
        options: ["Only in rain", "Only at night", "In all driving conditions", "Only on highways"],
        correct: 2,
        topic: "Safe Driving",
        excerpt: "The two-second rule should be used in all driving conditions to maintain safe following distance."
    },
    {
        question: "What does a flashing red light mean?",
        options: ["Stop completely", "Yield to traffic", "Slow down", "Speed up"],
        correct: 0,
        topic: "Traffic Signals",
        excerpt: "A flashing red light means you must come to a complete stop before proceeding."
    },
    {
        question: "When can you park in a handicapped parking space?",
        options: ["When no one is looking", "If you have a permit", "Never, unless authorized", "For short periods"],
        correct: 2,
        topic: "Parking",
        excerpt: "Handicapped parking spaces are only for vehicles displaying valid handicapped permits."
    },
    {
        question: "What should you do if you miss your turn?",
        options: ["Stop and back up", "Make a U-turn", "Continue to the next intersection", "Cross the median"],
        correct: 2,
        topic: "Navigation",
        excerpt: "If you miss your turn, continue to the next safe intersection and turn around legally."
    },
    {
        question: "When should you adjust your seat and mirrors?",
        options: ["Before starting the engine", "While driving", "At every stop", "Only when uncomfortable"],
        correct: 0,
        topic: "Vehicle Preparation",
        excerpt: "Adjust your seat, mirrors, and seat belts before starting the engine."
    },
    {
        question: "What is the minimum age to obtain a motorcycle license?",
        options: ["14", "15", "16", "18"],
        correct: 2,
        topic: "Licensing",
        excerpt: "You must be at least 16 years old to apply for a motorcycle license."
    },
    {
        question: "When should you avoid using cruise control?",
        options: ["On highways", "In heavy traffic", "In good weather", "On straight roads"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Avoid using cruise control in heavy traffic, poor weather, or on winding roads."
    },
    {
        question: "What does a white diamond on the road indicate?",
        options: ["Bike lane", "HOV lane", "Exit lane", "Passing zone"],
        correct: 1,
        topic: "Road Markings",
        excerpt: "White diamonds on the road indicate High Occupancy Vehicle (HOV) lanes."
    },
    {
        question: "When should you check your blind spots?",
        options: ["Only when changing lanes", "Before any maneuver", "Only at intersections", "When stopping"],
        correct: 1,
        topic: "Safe Driving",
        excerpt: "Always check your blind spots before changing lanes, turning, or backing up."
    },
    {
        question: "What is the penalty for running a red light?",
        options: ["Warning", "Fine", "License suspension", "All of the above"],
        correct: 1,
        topic: "Traffic Violations",
        excerpt: "Running a red light results in fines and possible license suspension."
    },
    {
        question: "When should you turn on your windshield wipers?",
        options: ["Only in heavy rain", "When visibility is reduced", "Only at night", "When following closely"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Use windshield wipers whenever visibility is reduced by rain, snow, or other conditions."
    },
    {
        question: "What does a pentagonal sign indicate?",
        options: ["Yield", "Stop", "School zone", "No parking"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "Pentagonal (five-sided) signs indicate school zones."
    },
    {
        question: "When should you use the horn?",
        options: ["To greet friends", "To alert others to your presence", "To express anger", "Continuously"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Use your horn only to alert others of your presence or to avoid collisions."
    },
    {
        question: "What is the maximum speed limit on Massachusetts highways?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correct: 2,
        topic: "Speed Limits",
        excerpt: "The maximum speed limit on most Massachusetts highways is 65 mph."
    },
    {
        question: "When should you avoid passing on the right?",
        options: ["On two-lane roads", "When the vehicle is turning left", "In no-passing zones", "All of the above"],
        correct: 3,
        topic: "Passing",
        excerpt: "Avoid passing on the right in all situations, especially when unsafe."
    },
    {
        question: "What should you do at a green light if pedestrians are crossing?",
        options: ["Proceed carefully", "Stop and wait", "Honk your horn", "Speed up"],
        correct: 1,
        topic: "Pedestrians",
        excerpt: "You must yield to pedestrians crossing at any intersection, even with a green light."
    },
    {
        question: "When should you turn off your cruise control?",
        options: ["On dry roads", "In rain or fog", "On straight highways", "When speeding"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Turn off cruise control in poor weather conditions like rain or fog."
    },
    {
        question: "What does a broken yellow line mean?",
        options: ["No passing", "Passing allowed", "Lane change", "Stop line"],
        correct: 1,
        topic: "Road Markings",
        excerpt: "A broken yellow line indicates that passing is allowed when safe."
    },
    {
        question: "When should you use your parking brake?",
        options: ["Only on hills", "When parking", "While driving", "In emergencies"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Always set your parking brake when parking to prevent rolling."
    },
    {
        question: "What is the minimum age for a full driver's license?",
        options: ["16", "16½", "17", "18"],
        correct: 1,
        topic: "Licensing",
        excerpt: "You must be at least 16½ years old to obtain a full driver's license."
    },
    {
        question: "When should you check your tire pressure?",
        options: ["Monthly", "Weekly", "Daily", "Only when low"],
        correct: 0,
        topic: "Vehicle Maintenance",
        excerpt: "Check tire pressure at least monthly and before long trips."
    },
    {
        question: "What does a circular sign indicate?",
        options: ["Yield", "Stop", "Regulatory", "Warning"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "Circular signs are regulatory signs that indicate required actions."
    },
    {
        question: "When should you avoid using high beams?",
        options: ["On rural roads", "When following another vehicle", "In clear weather", "At night"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Avoid using high beams when they might blind other drivers."
    },
    {
        question: "What is the penalty for improper passing?",
        options: ["Warning", "Fine", "License suspension", "All of the above"],
        correct: 1,
        topic: "Traffic Violations",
        excerpt: "Improper passing results in fines and possible license points."
    },
    {
        question: "When should you signal before turning?",
        options: ["100 feet before", "50 feet before", "At the intersection", "After turning"],
        correct: 0,
        topic: "Signaling",
        excerpt: "Signal your intentions at least 100 feet before turning."
    },
    {
        question: "What does a solid white line indicate?",
        options: ["Passing allowed", "No passing", "Lane boundary", "Stop line"],
        correct: 2,
        topic: "Road Markings",
        excerpt: "Solid white lines separate lanes of traffic moving in the same direction."
    },
    {
        question: "When should you yield to oncoming traffic?",
        options: ["When turning left", "When entering traffic", "Both A and B", "Never"],
        correct: 2,
        topic: "Right of Way",
        excerpt: "Yield to oncoming traffic when turning left or entering a roadway."
    },
    {
        question: "What should you do if you are drowsy while driving?",
        options: ["Drink coffee", "Open windows", "Pull over and rest", "Turn up radio"],
        correct: 2,
        topic: "Fatigue",
        excerpt: "If drowsy, pull over in a safe place and rest or change drivers."
    },
    {
        question: "When should you check your mirrors?",
        options: ["Before changing lanes", "Before slowing down", "Before stopping", "All of the above"],
        correct: 3,
        topic: "Safe Driving",
        excerpt: "Check your mirrors before any change in speed or direction."
    },
    {
        question: "What does a rectangular blue sign indicate?",
        options: ["Construction", "Motorist services", "Warning", "Regulatory"],
        correct: 1,
        topic: "Road Signs",
        excerpt: "Rectangular blue signs provide information about motorist services."
    },
    {
        question: "When should you avoid driving?",
        options: ["When tired", "When sick", "When emotional", "All of the above"],
        correct: 3,
        topic: "Fitness to Drive",
        excerpt: "Avoid driving when tired, sick, emotional, or under the influence."
    },
    {
        question: "What is the speed limit in a business district?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correct: 2,
        topic: "Speed Limits",
        excerpt: "The speed limit in business districts is 30 mph unless otherwise posted."
    },
    {
        question: "When should you use the four-way flashers?",
        options: ["When parking", "When broken down", "When slowing", "When turning"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Use four-way flashers when your vehicle is broken down or stopped."
    },
    {
        question: "What does a triangular sign indicate?",
        options: ["Stop", "Yield", "Warning", "Regulatory"],
        correct: 1,
        topic: "Road Signs",
        excerpt: "Triangular signs are yield signs requiring you to slow down and yield."
    },
    {
        question: "When should you check your oil?",
        options: ["Daily", "Weekly", "Monthly", "Only when low"],
        correct: 2,
        topic: "Vehicle Maintenance",
        excerpt: "Check engine oil at least monthly or before long trips."
    },
    {
        question: "What should you do if you are being passed?",
        options: ["Speed up", "Maintain speed", "Move right", "Honk"],
        correct: 1,
        topic: "Passing",
        excerpt: "When being passed, maintain your speed and stay in your lane."
    },
    {
        question: "When should you use your brakes smoothly?",
        options: ["Always", "Only in emergencies", "Only when stopping", "Never"],
        correct: 0,
        topic: "Braking",
        excerpt: "Always apply brakes smoothly to avoid skidding or loss of control."
    },
    {
        question: "What does a rectangular green sign indicate?",
        options: ["Warning", "Regulatory", "Guide signs", "Construction"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "Rectangular green signs are guide signs providing directional information."
    },
    {
        question: "When should you adjust your speed?",
        options: ["For traffic", "For weather", "For road conditions", "All of the above"],
        correct: 3,
        topic: "Speed Control",
        excerpt: "Adjust your speed for traffic, weather, road conditions, and visibility."
    },
    {
        question: "What should you do if you are in an accident?",
        options: ["Leave the scene", "Exchange information", "Call police", "Both B and C"],
        correct: 3,
        topic: "Accidents",
        excerpt: "Stop, exchange information with others involved, and call police if needed."
    },
    {
        question: "When should you check your brakes?",
        options: ["Before driving", "During driving", "After driving", "Never"],
        correct: 0,
        topic: "Vehicle Maintenance",
        excerpt: "Test your brakes before driving each day."
    },
    {
        question: "What does a rectangular orange sign indicate?",
        options: ["Warning", "Regulatory", "Construction", "Guide"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "Rectangular orange signs warn of construction or maintenance work."
    },
    {
        question: "When should you use your turn signals?",
        options: ["Before turning", "Before changing lanes", "Before stopping", "All of the above"],
        correct: 3,
        topic: "Signaling",
        excerpt: "Use turn signals before turning, changing lanes, or stopping."
    },
    {
        question: "What should you do if you are being followed closely?",
        options: ["Speed up", "Maintain speed", "Tap brakes", "Change lanes"],
        correct: 1,
        topic: "Defensive Driving",
        excerpt: "Maintain your speed and increase following distance when being tailgated."
    },
    {
        question: "When should you check your gas gauge?",
        options: ["Before driving", "During driving", "After driving", "Never"],
        correct: 0,
        topic: "Vehicle Preparation",
        excerpt: "Check your fuel level before starting your trip."
    },
    {
        question: "What does a pentagonal white sign indicate?",
        options: ["Yield", "Stop", "School", "No parking"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "White pentagonal signs indicate school zones."
    },
    {
        question: "When should you avoid left turns?",
        options: ["At intersections", "In traffic", "When unsafe", "Never"],
        correct: 2,
        topic: "Maneuvers",
        excerpt: "Avoid left turns when they cannot be made safely."
    },
    {
        question: "What should you do if you are lost?",
        options: ["Stop and ask", "Continue driving", "Use GPS", "Pull over safely"],
        correct: 3,
        topic: "Navigation",
        excerpt: "If lost, pull over safely and consult a map or GPS."
    },
    {
        question: "When should you check your windshield?",
        options: ["Before driving", "During driving", "After driving", "Never"],
        correct: 0,
        topic: "Vehicle Maintenance",
        excerpt: "Check windshield for cracks or damage before driving."
    },
    {
        question: "What does a circular white sign indicate?",
        options: ["Yield", "Stop", "Regulatory", "Warning"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "White circular signs are regulatory signs."
    },
    {
        question: "When should you use your defroster?",
        options: ["In summer", "When windows fog", "Only at night", "Never"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Use defroster when windows fog up for clear visibility."
    },
    {
        question: "What should you do if you are in a skid?",
        options: ["Brake hard", "Steer sharply", "Ease off accelerator", "Accelerate"],
        correct: 2,
        topic: "Emergency Situations",
        excerpt: "In a skid, ease off the accelerator and steer in the direction of the skid."
    },
    {
        question: "When should you check your lights?",
        options: ["Before driving", "During driving", "After driving", "Never"],
        correct: 0,
        topic: "Vehicle Maintenance",
        excerpt: "Check all lights before driving in low visibility conditions."
    },
    {
        question: "What does a triangular orange sign indicate?",
        options: ["Yield", "Stop", "Warning", "Construction"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "Triangular orange signs warn of construction zones."
    },
    {
        question: "When should you use your emergency brake?",
        options: ["While driving", "When parking", "When stopping", "In traffic"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Use the emergency brake only when parking or in brake failure."
    },
    {
        question: "What should you do if you are blinded by headlights?",
        options: ["Close eyes", "Look right", "Slow down", "Flash lights"],
        correct: 2,
        topic: "Night Driving",
        excerpt: "If blinded by headlights, slow down and look to the right edge of the road."
    },
    {
        question: "When should you check your wiper blades?",
        options: ["Before rain", "During rain", "After rain", "Never"],
        correct: 0,
        topic: "Vehicle Maintenance",
        excerpt: "Check wiper blades regularly and replace when worn."
    },
    {
        question: "What does a rectangular brown sign indicate?",
        options: ["Warning", "Regulatory", "Recreational", "Guide"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "Brown signs indicate recreational or cultural interest areas."
    },
    {
        question: "When should you use your heater?",
        options: ["In summer", "When cold", "Only at night", "Never"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Use heater to maintain clear windows in cold weather."
    },
    {
        question: "What should you do if you are in a collision?",
        options: ["Drive away", "Stop immediately", "Continue driving", "Call friend"],
        correct: 1,
        topic: "Accidents",
        excerpt: "Stop immediately and assess the situation in any collision."
    },
    {
        question: "When should you check your coolant?",
        options: ["Daily", "Weekly", "Monthly", "Only when hot"],
        correct: 2,
        topic: "Vehicle Maintenance",
        excerpt: "Check coolant level monthly and before long trips."
    },
    {
        question: "What does a rectangular white sign indicate?",
        options: ["Warning", "Regulatory", "Guide", "Construction"],
        correct: 1,
        topic: "Road Signs",
        excerpt: "White rectangular signs are regulatory signs."
    },
    {
        question: "When should you use your air conditioner?",
        options: ["In winter", "When hot", "Only at night", "Never"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Use air conditioner to maintain comfort and clear windows."
    },
    {
        question: "What should you do if you are pulled over?",
        options: ["Drive away", "Stop safely", "Speed up", "Ignore"],
        correct: 1,
        topic: "Police Stops",
        excerpt: "Pull over safely to the right when signaled by police."
    },
    {
        question: "When should you check your battery?",
        options: ["Daily", "Weekly", "Monthly", "Only when dead"],
        correct: 2,
        topic: "Vehicle Maintenance",
        excerpt: "Check battery terminals monthly for corrosion."
    },
    {
        question: "What does a rectangular yellow sign indicate?",
        options: ["Warning", "Regulatory", "Guide", "Construction"],
        correct: 0,
        topic: "Road Signs",
        excerpt: "Yellow rectangular signs warn of conditions ahead."
    },
    {
        question: "When should you use your fan?",
        options: ["In summer", "When hot", "Only at night", "Never"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Use fan to circulate air and maintain comfort."
    },
    {
        question: "What should you do if you are in an emergency?",
        options: ["Panic", "Stay calm", "Drive fast", "Stop suddenly"],
        correct: 1,
        topic: "Emergency Situations",
        excerpt: "Stay calm and assess the situation in emergencies."
    },
    {
        question: "When should you check your transmission fluid?",
        options: ["Daily", "Weekly", "Monthly", "Only when slipping"],
        correct: 2,
        topic: "Vehicle Maintenance",
        excerpt: "Check transmission fluid monthly or as recommended."
    },
    {
        question: "What does a rectangular black sign indicate?",
        options: ["Warning", "Regulatory", "Guide", "Construction"],
        correct: 1,
        topic: "Road Signs",
        excerpt: "Black rectangular signs are regulatory signs."
    },
    {
        question: "When should you use your hazard lights?",
        options: ["When parking", "When broken down", "When slowing", "When turning"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Use hazard lights when your vehicle is disabled or stopped."
    },
    {
        question: "What should you do if you are fatigued?",
        options: ["Drink caffeine", "Drive faster", "Pull over and rest", "Open windows"],
        correct: 2,
        topic: "Fatigue",
        excerpt: "Pull over safely and rest if you feel fatigued while driving."
    },
    {
        question: "When should you check your belts?",
        options: ["Before driving", "During driving", "After driving", "Never"],
        correct: 0,
        topic: "Vehicle Maintenance",
        excerpt: "Check all belts for wear before driving."
    },
    {
        question: "What does a rectangular red sign indicate?",
        options: ["Warning", "Stop", "Regulatory", "Construction"],
        correct: 1,
        topic: "Road Signs",
        excerpt: "Red rectangular signs indicate stop or prohibition."
    },
    {
        question: "When should you use your dome light?",
        options: ["While driving", "When parking at night", "In traffic", "Never"],
        correct: 1,
        topic: "Vehicle Operation",
        excerpt: "Use dome light when entering or exiting vehicle at night."
    },
    {
        question: "What should you do if you are in fog?",
        options: ["Speed up", "Use low beams", "Use high beams", "Follow closely"],
        correct: 1,
        topic: "Weather Conditions",
        excerpt: "Use low beam headlights and reduce speed in fog."
    },
    {
        question: "When should you check your hoses?",
        options: ["Daily", "Weekly", "Monthly", "Only when leaking"],
        correct: 2,
        topic: "Vehicle Maintenance",
        excerpt: "Check all hoses monthly for cracks or leaks."
    },
    {
        question: "What does a rectangular green sign indicate?",
        options: ["Warning", "Regulatory", "Guide", "Construction"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "Green rectangular signs provide directional guidance."
    },
    {
        question: "When should you use your brakes?",
        options: ["Suddenly", "Smoothly", "Hard", "Never"],
        correct: 1,
        topic: "Braking",
        excerpt: "Apply brakes smoothly to maintain control."
    },
    {
        question: "What should you do if you are in snow?",
        options: ["Speed up", "Use chains", "Drive normally", "Stop"],
        correct: 1,
        topic: "Weather Conditions",
        excerpt: "Use snow chains or tires appropriate for snow conditions."
    },
    {
        question: "When should you check your spark plugs?",
        options: ["Daily", "Weekly", "As needed", "Never"],
        correct: 2,
        topic: "Vehicle Maintenance",
        excerpt: "Check spark plugs according to manufacturer recommendations."
    },
    {
        question: "What does a rectangular blue sign indicate?",
        options: ["Warning", "Regulatory", "Services", "Construction"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "Blue rectangular signs indicate motorist services."
    },
    {
        question: "When should you use your brakes in rain?",
        options: ["Hard", "Smoothly", "Not at all", "Suddenly"],
        correct: 1,
        topic: "Weather Conditions",
        excerpt: "Apply brakes smoothly in rain to avoid hydroplaning."
    },
    {
        question: "What should you do if you are in ice?",
        options: ["Speed up", "Brake hard", "Drive slowly", "Stop"],
        correct: 2,
        topic: "Weather Conditions",
        excerpt: "Drive slowly and increase following distance on ice."
    },
    {
        question: "When should you check your air filter?",
        options: ["Daily", "Weekly", "Monthly", "Only when dirty"],
        correct: 2,
        topic: "Vehicle Maintenance",
        excerpt: "Check air filter monthly or as recommended."
    },
    {
        question: "What does a rectangular orange sign indicate?",
        options: ["Warning", "Regulatory", "Construction", "Guide"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "Orange rectangular signs indicate construction zones."
    },
    {
        question: "When should you use your brakes in snow?",
        options: ["Hard", "Smoothly", "Not at all", "Suddenly"],
        correct: 1,
        topic: "Weather Conditions",
        excerpt: "Apply brakes smoothly in snow to maintain control."
    },
    {
        question: "What should you do if you are in wind?",
        options: ["Speed up", "Hold steering firmly", "Drive normally", "Stop"],
        correct: 1,
        topic: "Weather Conditions",
        excerpt: "Hold steering wheel firmly in high winds."
    },
    {
        question: "When should you check your fuel filter?",
        options: ["Daily", "Weekly", "As needed", "Never"],
        correct: 2,
        topic: "Vehicle Maintenance",
        excerpt: "Check fuel filter according to service schedule."
    },
    {
        question: "What does a rectangular brown sign indicate?",
        options: ["Warning", "Regulatory", "Recreation", "Construction"],
        correct: 2,
        topic: "Road Signs",
        excerpt: "Brown rectangular signs indicate recreational areas."
    },
    {
        question: "When should you use your brakes in wind?",
        options: ["Hard", "Smoothly", "Not at all", "Suddenly"],
        correct: 1,
        topic: "Weather Conditions",
        excerpt: "Apply brakes smoothly in windy conditions."
    }
];

let questions = []; // Will be populated with 25 random questions
let currentQuestionIndex = 0;
let userAnswers = new Array(25).fill(null); // Always 25 questions for the test
let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize the test
function initTest() {
    // Shuffle questions for randomness and take first 25
    let shuffledQuestions = [...allQuestions];
    shuffleArray(shuffledQuestions);
    questions = shuffledQuestions.slice(0, 25);
    
    document.getElementById('start-test').addEventListener('click', startTest);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('continue-btn').addEventListener('click', continueToNext);
    document.getElementById('retake-test').addEventListener('click', retakeTest);
}

function startTest() {
    document.getElementById('instructions').classList.add('hidden');
    document.getElementById('test-section').classList.remove('hidden');
    startTimer();
    showQuestion(0);
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function showQuestion(index) {
    currentQuestionIndex = index;
    const question = questions[index];
    
    document.getElementById('question-number').textContent = `Question ${index + 1} of 25`;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (userAnswers[index] === optionIndex) {
            optionDiv.classList.add('selected');
        }
        
        // Disable options if already answered
        const isAnswered = userAnswers[index] !== null;
        if (isAnswered) {
            optionDiv.classList.add('disabled');
        }
        
        optionDiv.innerHTML = `
            <input type="radio" id="option${optionIndex}" name="question" value="${optionIndex}" ${userAnswers[index] === optionIndex ? 'checked' : ''} ${isAnswered ? 'disabled' : ''}>
            <label for="option${optionIndex}">${option}</label>
        `;
        
        if (!isAnswered) {
            optionDiv.addEventListener('click', () => selectOption(optionIndex));
        }
        optionsContainer.appendChild(optionDiv);
    });
    
    // Hide feedback when showing a new question
    document.getElementById('feedback').classList.add('hidden');
    
    updateNavigationButtons();
}

function selectOption(optionIndex) {
    // Only allow selection if not already answered
    if (userAnswers[currentQuestionIndex] !== null) {
        return;
    }
    
    userAnswers[currentQuestionIndex] = optionIndex;
    showQuestion(currentQuestionIndex); // Refresh to show selection and disable options
    
    // Show feedback immediately
    showFeedback(optionIndex);
}

function showFeedback(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const feedbackDiv = document.getElementById('feedback');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackMessage = document.getElementById('feedback-message');
    const manualExcerpt = document.getElementById('manual-excerpt');
    
    const isCorrect = selectedIndex === question.correct;
    
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackTitle.textContent = isCorrect ? 'Correct!' : 'Incorrect';
    feedbackMessage.textContent = isCorrect 
        ? 'Good job! You selected the correct answer.' 
        : `The correct answer is: ${question.options[question.correct]}`;
    
    manualExcerpt.textContent = question.excerpt;
    
    feedbackDiv.classList.remove('hidden');
    
    // Highlight correct and incorrect options
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.remove('correct', 'incorrect');
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Disable navigation until continue is clicked
    document.getElementById('next-btn').disabled = true;
    document.getElementById('prev-btn').disabled = true;
}

function continueToNext() {
    document.getElementById('feedback').classList.add('hidden');
    updateNavigationButtons();
    
    // Auto-advance to next question if not on last question
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    } else {
        // If on last question, show results
        endTest();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    } else {
        endTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

function updateNavigationButtons() {
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').textContent = currentQuestionIndex === questions.length - 1 ? 'Finish Test' : 'Next';
}

function endTest() {
    clearInterval(timer);
    document.getElementById('test-section').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    
    const correctAnswers = userAnswers.reduce((count, answer, index) => {
        return count + (answer === questions[index].correct ? 1 : 0);
    }, 0);
    
    const passed = correctAnswers >= 18;
    
    document.getElementById('result-message').textContent = passed ? 'PASSED' : 'FAILED';
    document.getElementById('result-message').className = passed ? 'pass' : 'fail';
    
    document.getElementById('score-details').textContent = `You answered ${correctAnswers} out of 25 questions correctly.`;
}

function retakeTest() {
    // Reset everything
    currentQuestionIndex = 0;
    userAnswers = new Array(25).fill(null);
    timeLeft = 25 * 60;
    
    // Shuffle questions for randomness and take first 25
    let shuffledQuestions = [...allQuestions];
    shuffleArray(shuffledQuestions);
    questions = shuffledQuestions.slice(0, 25);
    
    document.getElementById('results').classList.add('hidden');
    document.getElementById('instructions').classList.remove('hidden');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initTest);