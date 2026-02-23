// Exercise database organized by workout type
const exercises = {
    push: {
        title: "Push Day",
        color: "#e74c3c",
        exercises: [
            // Chest
            { name: "Barbell Bench Press", muscle: "Chest", sets: "4", reps: "8-10" },
            { name: "Incline Dumbbell Press", muscle: "Upper Chest", sets: "3", reps: "10-12" },
            { name: "Dumbbell Flyes", muscle: "Chest", sets: "3", reps: "12-15" },
            { name: "Cable Crossovers", muscle: "Chest", sets: "3", reps: "12-15" },
            { name: "Decline Bench Press", muscle: "Lower Chest", sets: "3", reps: "8-10" },
            { name: "Push-Ups", muscle: "Chest", sets: "3", reps: "15-20" },
            { name: "Machine Chest Press", muscle: "Chest", sets: "3", reps: "10-12" },
            // Shoulders
            { name: "Overhead Press", muscle: "Shoulders", sets: "4", reps: "8-10" },
            { name: "Lateral Raises", muscle: "Side Delts", sets: "4", reps: "12-15" },
            { name: "Front Raises", muscle: "Front Delts", sets: "3", reps: "12-15" },
            { name: "Arnold Press", muscle: "Shoulders", sets: "3", reps: "10-12" },
            { name: "Face Pulls", muscle: "Rear Delts", sets: "3", reps: "15-20" },
            { name: "Dumbbell Shoulder Press", muscle: "Shoulders", sets: "3", reps: "10-12" },
            // Triceps
            { name: "Tricep Pushdowns", muscle: "Triceps", sets: "3", reps: "12-15" },
            { name: "Skull Crushers", muscle: "Triceps", sets: "3", reps: "10-12" },
            { name: "Overhead Tricep Extension", muscle: "Triceps", sets: "3", reps: "12-15" },
            { name: "Close-Grip Bench Press", muscle: "Triceps", sets: "3", reps: "8-10" },
            { name: "Tricep Dips", muscle: "Triceps", sets: "3", reps: "10-15" },
            { name: "Diamond Push-Ups", muscle: "Triceps", sets: "3", reps: "12-15" }
        ],
        tips: [
            "Focus on controlled negatives for maximum chest activation.",
            "Keep your shoulders back and down during pressing movements.",
            "Don't forget to warm up your rotator cuffs before heavy pressing.",
            "Squeeze at the top of each rep for better muscle engagement.",
            "Rest 2-3 minutes between heavy compound sets."
        ]
    },
    pull: {
        title: "Pull Day",
        color: "#3498db",
        exercises: [
            // Back
            { name: "Deadlifts", muscle: "Back/Posterior Chain", sets: "4", reps: "5-6" },
            { name: "Pull-Ups", muscle: "Lats", sets: "4", reps: "8-12" },
            { name: "Barbell Rows", muscle: "Back", sets: "4", reps: "8-10" },
            { name: "Lat Pulldowns", muscle: "Lats", sets: "3", reps: "10-12" },
            { name: "Seated Cable Rows", muscle: "Mid Back", sets: "3", reps: "10-12" },
            { name: "T-Bar Rows", muscle: "Back", sets: "3", reps: "8-10" },
            { name: "Single-Arm Dumbbell Rows", muscle: "Lats", sets: "3", reps: "10-12" },
            { name: "Chest-Supported Rows", muscle: "Upper Back", sets: "3", reps: "10-12" },
            { name: "Straight-Arm Pulldowns", muscle: "Lats", sets: "3", reps: "12-15" },
            // Biceps
            { name: "Barbell Curls", muscle: "Biceps", sets: "3", reps: "10-12" },
            { name: "Hammer Curls", muscle: "Biceps/Brachialis", sets: "3", reps: "10-12" },
            { name: "Incline Dumbbell Curls", muscle: "Biceps", sets: "3", reps: "10-12" },
            { name: "Preacher Curls", muscle: "Biceps", sets: "3", reps: "10-12" },
            { name: "Cable Curls", muscle: "Biceps", sets: "3", reps: "12-15" },
            { name: "Concentration Curls", muscle: "Biceps", sets: "3", reps: "12-15" },
            // Rear Delts
            { name: "Reverse Pec Deck", muscle: "Rear Delts", sets: "3", reps: "12-15" },
            { name: "Face Pulls", muscle: "Rear Delts", sets: "3", reps: "15-20" },
            { name: "Rear Delt Flyes", muscle: "Rear Delts", sets: "3", reps: "12-15" }
        ],
        tips: [
            "Initiate pulling movements with your back, not your arms.",
            "Use straps for heavy rows if grip is limiting you.",
            "Focus on squeezing your shoulder blades together at peak contraction.",
            "Keep your core tight during all rowing movements.",
            "Don't use momentum - control the weight throughout the movement."
        ]
    },
    legs: {
        title: "Legs Day",
        color: "#2ecc71",
        exercises: [
            // Quads
            { name: "Barbell Back Squats", muscle: "Quads/Glutes", sets: "4", reps: "6-8" },
            { name: "Front Squats", muscle: "Quads", sets: "4", reps: "8-10" },
            { name: "Leg Press", muscle: "Quads/Glutes", sets: "4", reps: "10-12" },
            { name: "Hack Squats", muscle: "Quads", sets: "3", reps: "10-12" },
            { name: "Leg Extensions", muscle: "Quads", sets: "3", reps: "12-15" },
            { name: "Walking Lunges", muscle: "Quads/Glutes", sets: "3", reps: "12 each leg" },
            { name: "Bulgarian Split Squats", muscle: "Quads/Glutes", sets: "3", reps: "10 each leg" },
            { name: "Goblet Squats", muscle: "Quads", sets: "3", reps: "12-15" },
            // Hamstrings
            { name: "Romanian Deadlifts", muscle: "Hamstrings", sets: "4", reps: "8-10" },
            { name: "Lying Leg Curls", muscle: "Hamstrings", sets: "3", reps: "10-12" },
            { name: "Seated Leg Curls", muscle: "Hamstrings", sets: "3", reps: "10-12" },
            { name: "Good Mornings", muscle: "Hamstrings/Lower Back", sets: "3", reps: "10-12" },
            { name: "Nordic Hamstring Curls", muscle: "Hamstrings", sets: "3", reps: "6-8" },
            // Glutes
            { name: "Hip Thrusts", muscle: "Glutes", sets: "4", reps: "10-12" },
            { name: "Glute Bridges", muscle: "Glutes", sets: "3", reps: "15-20" },
            { name: "Cable Kickbacks", muscle: "Glutes", sets: "3", reps: "12-15 each" },
            // Calves
            { name: "Standing Calf Raises", muscle: "Calves", sets: "4", reps: "12-15" },
            { name: "Seated Calf Raises", muscle: "Calves", sets: "3", reps: "15-20" },
            { name: "Donkey Calf Raises", muscle: "Calves", sets: "3", reps: "12-15" }
        ],
        tips: [
            "Never skip the warm-up - spend 5-10 minutes on mobility.",
            "Keep your knees tracking over your toes during squats.",
            "Don't lock out your knees completely at the top of leg press.",
            "Focus on the mind-muscle connection with your glutes.",
            "Take longer rest periods (3-4 min) between heavy squat sets."
        ]
    }
};

// Current workout state
let currentWorkoutType = null;

// DOM elements
const workoutDisplay = document.getElementById('workout-display');
const workoutTitle = document.getElementById('workout-title');
const exerciseList = document.getElementById('exercise-list');
const workoutTip = document.getElementById('workout-tip');
const regenerateBtn = document.getElementById('regenerate-btn');

// Get all workout buttons
const workoutButtons = document.querySelectorAll('.workout-btn');

// Function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Function to generate a balanced workout
function generateWorkout(type) {
    const workoutData = exercises[type];
    const allExercises = workoutData.exercises;

    // Group exercises by muscle
    const muscleGroups = {};
    allExercises.forEach(exercise => {
        const muscle = exercise.muscle.split('/')[0]; // Take primary muscle
        if (!muscleGroups[muscle]) {
            muscleGroups[muscle] = [];
        }
        muscleGroups[muscle].push(exercise);
    });

    // Select exercises ensuring variety
    const selectedExercises = [];
    const muscleKeys = Object.keys(muscleGroups);

    // Shuffle muscle groups for variety
    const shuffledMuscles = shuffleArray(muscleKeys);

    // Pick 6-8 exercises with good distribution
    const targetCount = 7;
    let exerciseCount = 0;
    let round = 0;

    while (exerciseCount < targetCount && round < 3) {
        for (const muscle of shuffledMuscles) {
            if (exerciseCount >= targetCount) break;

            const available = muscleGroups[muscle].filter(
                e => !selectedExercises.includes(e)
            );

            if (available.length > 0) {
                const randomIndex = Math.floor(Math.random() * available.length);
                selectedExercises.push(available[randomIndex]);
                exerciseCount++;
            }
        }
        round++;
    }

    return {
        title: workoutData.title,
        exercises: selectedExercises,
        tip: workoutData.tips[Math.floor(Math.random() * workoutData.tips.length)]
    };
}

// Function to render workout
function renderWorkout(workout) {
    workoutTitle.textContent = workout.title;
    workoutTip.textContent = `💡 ${workout.tip}`;

    exerciseList.innerHTML = workout.exercises.map(exercise => `
        <div class="exercise-item">
            <div class="exercise-info">
                <span class="exercise-name">${exercise.name}</span>
                <span class="exercise-muscle">${exercise.muscle}</span>
            </div>
            <div class="exercise-sets">
                <span class="sets-number">${exercise.sets} × ${exercise.reps}</span>
                <span class="sets-label">sets × reps</span>
            </div>
        </div>
    `).join('');

    workoutDisplay.classList.remove('hidden');

    // Scroll to workout display
    workoutDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to handle workout button click
function handleWorkoutSelect(type) {
    currentWorkoutType = type;

    // Update active states
    workoutButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.workout === type) {
            btn.classList.add('active');
        }
    });

    const workout = generateWorkout(type);
    renderWorkout(workout);
}

// Event listeners for workout buttons
workoutButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleWorkoutSelect(button.dataset.workout);
    });
});

// Event listener for regenerate button
regenerateBtn.addEventListener('click', () => {
    if (currentWorkoutType) {
        const workout = generateWorkout(currentWorkoutType);
        renderWorkout(workout);
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === '1') handleWorkoutSelect('push');
    if (e.key === '2') handleWorkoutSelect('pull');
    if (e.key === '3') handleWorkoutSelect('legs');
    if (e.key === 'r' && currentWorkoutType) {
        const workout = generateWorkout(currentWorkoutType);
        renderWorkout(workout);
    }
});
