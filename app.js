// Diabetes Management System JavaScript

// Food database from provided JSON data
const foodDatabase = [
  {"name": "White Bread", "serving": "1 slice", "carbs": 15, "calories": 80, "gi": 75, "category": "grains"},
  {"name": "Whole Wheat Bread", "serving": "1 slice", "carbs": 15, "calories": 80, "gi": 74, "category": "grains"},
  {"name": "White Rice", "serving": "1 cup cooked", "carbs": 45, "calories": 205, "gi": 73, "category": "grains"},
  {"name": "Brown Rice", "serving": "1 cup cooked", "carbs": 45, "calories": 216, "gi": 68, "category": "grains"},
  {"name": "Pasta", "serving": "1 cup cooked", "carbs": 45, "calories": 220, "gi": 49, "category": "grains"},
  {"name": "Oatmeal", "serving": "1 cup cooked", "carbs": 30, "calories": 154, "gi": 55, "category": "grains"},
  {"name": "Quinoa", "serving": "1 cup cooked", "carbs": 39, "calories": 222, "gi": 53, "category": "grains"},
  {"name": "Bagel", "serving": "1 medium", "carbs": 45, "calories": 245, "gi": 72, "category": "grains"},
  {"name": "Apple", "serving": "1 medium", "carbs": 25, "calories": 95, "gi": 36, "category": "fruits"},
  {"name": "Banana", "serving": "1 medium", "carbs": 27, "calories": 105, "gi": 51, "category": "fruits"},
  {"name": "Orange", "serving": "1 medium", "carbs": 15, "calories": 62, "gi": 43, "category": "fruits"},
  {"name": "Grapes", "serving": "1 cup", "carbs": 16, "calories": 62, "gi": 46, "category": "fruits"},
  {"name": "Watermelon", "serving": "1 cup diced", "carbs": 12, "calories": 46, "gi": 76, "category": "fruits"},
  {"name": "Dates", "serving": "3 dates", "carbs": 54, "calories": 200, "gi": 42, "category": "fruits"},
  {"name": "Strawberries", "serving": "1 cup", "carbs": 11, "calories": 49, "gi": 40, "category": "fruits"},
  {"name": "Mango", "serving": "1 cup diced", "carbs": 25, "calories": 107, "gi": 51, "category": "fruits"},
  {"name": "Pineapple", "serving": "1 cup diced", "carbs": 22, "calories": 82, "gi": 59, "category": "fruits"},
  {"name": "Potato (baked)", "serving": "1 medium", "carbs": 37, "calories": 161, "gi": 78, "category": "vegetables"},
  {"name": "Sweet Potato", "serving": "1 medium", "carbs": 24, "calories": 112, "gi": 63, "category": "vegetables"},
  {"name": "Corn", "serving": "1 cup", "carbs": 31, "calories": 125, "gi": 52, "category": "vegetables"},
  {"name": "Carrots", "serving": "1 cup raw", "carbs": 12, "calories": 52, "gi": 39, "category": "vegetables"},
  {"name": "Broccoli", "serving": "1 cup", "carbs": 6, "calories": 25, "gi": 10, "category": "vegetables"},
  {"name": "Green Peas", "serving": "1 cup", "carbs": 21, "calories": 118, "gi": 48, "category": "vegetables"},
  {"name": "Milk (1%)", "serving": "1 cup", "carbs": 13, "calories": 102, "gi": 37, "category": "dairy"},
  {"name": "Yogurt (plain)", "serving": "6 oz", "carbs": 12, "calories": 100, "gi": 41, "category": "dairy"},
  {"name": "Greek Yogurt", "serving": "6 oz", "carbs": 6, "calories": 100, "gi": 11, "category": "dairy"},
  {"name": "Ice Cream", "serving": "1/2 cup", "carbs": 16, "calories": 137, "gi": 51, "category": "dairy"},
  {"name": "Black Beans", "serving": "1 cup cooked", "carbs": 41, "calories": 227, "gi": 30, "category": "legumes"},
  {"name": "Chickpeas", "serving": "1 cup cooked", "carbs": 45, "calories": 269, "gi": 28, "category": "legumes"},
  {"name": "Lentils", "serving": "1 cup cooked", "carbs": 40, "calories": 230, "gi": 32, "category": "legumes"},
  {"name": "Kidney Beans", "serving": "1 cup cooked", "carbs": 40, "calories": 225, "gi": 24, "category": "legumes"},
  {"name": "Chocolate", "serving": "1 oz", "carbs": 16, "calories": 155, "gi": 40, "category": "snacks"},
  {"name": "Popcorn", "serving": "3 cups", "carbs": 19, "calories": 93, "gi": 65, "category": "snacks"},
  {"name": "Crackers", "serving": "5 pieces", "carbs": 11, "calories": 60, "gi": 70, "category": "snacks"},
  {"name": "Granola Bar", "serving": "1 bar", "carbs": 29, "calories": 140, "gi": 61, "category": "snacks"},
  {"name": "Potato Chips", "serving": "1 oz", "carbs": 15, "calories": 152, "gi": 56, "category": "snacks"},
  {"name": "White Sugar", "serving": "1 tbsp", "carbs": 15, "calories": 49, "gi": 65, "category": "sweets"},
  {"name": "Honey", "serving": "1 tbsp", "carbs": 17, "calories": 64, "gi": 61, "category": "sweets"},
  {"name": "Cake (vanilla)", "serving": "1 slice", "carbs": 42, "calories": 239, "gi": 78, "category": "sweets"}
];

// Application state
let currentMeal = [];
let mealHistory = [];
let chart = null;

// DOM elements
const elements = {
    // Patient form elements
    age: document.getElementById('age'),
    weight: document.getElementById('weight'),
    height: document.getElementById('height'),
    diabetesType: document.getElementById('diabetesType'),
    currentBG: document.getElementById('currentBG'),
    timeSinceLastMeal: document.getElementById('timeSinceLastMeal'),
    
    // Food selection elements
    foodSearch: document.getElementById('foodSearch'),
    quantity: document.getElementById('quantity'),
    foodInfo: document.getElementById('foodInfo'),
    foodDetails: document.getElementById('foodDetails'),
    addFoodBtn: document.getElementById('addFoodBtn'),
    
    // Custom food elements
    customFoodName: document.getElementById('customFoodName'),
    customCarbs: document.getElementById('customCarbs'),
    customGI: document.getElementById('customGI'),
    addCustomFoodBtn: document.getElementById('addCustomFoodBtn'),
    
    // Meal summary elements
    mealSummary: document.getElementById('mealSummary'),
    mealItems: document.getElementById('mealItems'),
    totalCarbs: document.getElementById('totalCarbs'),
    totalCalories: document.getElementById('totalCalories'),
    calculateBtn: document.getElementById('calculateBtn'),
    
    // Results elements
    resultsContent: document.getElementById('resultsContent'),
    chartContainer: document.getElementById('chartContainer'),
    recommendations: document.getElementById('recommendations'),
    recommendationsList: document.getElementById('recommendationsList'),
    
    // History elements
    historyTableBody: document.getElementById('historyTableBody')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeFoodDropdown();
    setupEventListeners();
    updateMealSummary();
});

// Initialize food dropdown with database items
function initializeFoodDropdown() {
    const foodSelect = elements.foodSearch;
    
    // Sort foods by category and name
    const sortedFoods = foodDatabase.sort((a, b) => {
        if (a.category !== b.category) {
            return a.category.localeCompare(b.category);
        }
        return a.name.localeCompare(b.name);
    });
    
    let currentCategory = '';
    sortedFoods.forEach(food => {
        if (food.category !== currentCategory) {
            currentCategory = food.category;
            const optgroup = document.createElement('optgroup');
            optgroup.label = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
            foodSelect.appendChild(optgroup);
        }
        
        const option = document.createElement('option');
        option.value = food.name;
        option.textContent = `${food.name} (${food.serving})`;
        foodSelect.lastChild.appendChild(option);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Food selection change
    elements.foodSearch.addEventListener('change', updateFoodInfo);
    
    // Add food button
    elements.addFoodBtn.addEventListener('click', addSelectedFoodToMeal);
    
    // Add custom food button
    elements.addCustomFoodBtn.addEventListener('click', addCustomFoodToMeal);
    
    // Calculate predictions button
    elements.calculateBtn.addEventListener('click', calculatePredictions);
    
    // Form validation on input
    const requiredInputs = [elements.age, elements.weight, elements.height, elements.currentBG];
    requiredInputs.forEach(input => {
        input.addEventListener('input', validateInput);
    });
}

// Update food information display
function updateFoodInfo() {
    const selectedFoodName = elements.foodSearch.value;
    const quantity = parseFloat(elements.quantity.value) || 1;
    
    if (!selectedFoodName) {
        elements.foodDetails.textContent = 'Select a food to see nutritional information';
        return;
    }
    
    const food = foodDatabase.find(f => f.name === selectedFoodName);
    if (!food) return;
    
    const totalCarbs = (food.carbs * quantity).toFixed(1);
    const totalCalories = Math.round(food.calories * quantity);
    
    elements.foodDetails.innerHTML = `
        <div class="food-detail-item">
            <span class="food-detail-label">Food:</span> ${food.name}
        </div>
        <div class="food-detail-item">
            <span class="food-detail-label">Serving:</span> ${food.serving} × ${quantity}
        </div>
        <div class="food-detail-item">
            <span class="food-detail-label">Carbohydrates:</span> ${totalCarbs}g
        </div>
        <div class="food-detail-item">
            <span class="food-detail-label">Calories:</span> ${totalCalories}
        </div>
        <div class="food-detail-item">
            <span class="food-detail-label">Glycemic Index:</span> ${food.gi} (${getGICategory(food.gi)})
        </div>
        <div class="food-detail-item">
            <span class="food-detail-label">Category:</span> ${food.category}
        </div>
    `;
}

// Add selected food to current meal
function addSelectedFoodToMeal() {
    const selectedFoodName = elements.foodSearch.value;
    const quantity = parseFloat(elements.quantity.value) || 1;
    
    if (!selectedFoodName) {
        showError('Please select a food item first.');
        return;
    }
    
    if (quantity <= 0) {
        showError('Please enter a valid quantity.');
        return;
    }
    
    const food = foodDatabase.find(f => f.name === selectedFoodName);
    if (!food) return;
    
    const mealItem = {
        name: food.name,
        serving: food.serving,
        quantity: quantity,
        carbs: food.carbs * quantity,
        calories: food.calories * quantity,
        gi: food.gi,
        category: food.category,
        isCustom: false
    };
    
    currentMeal.push(mealItem);
    updateMealSummary();
    
    // Reset form
    elements.foodSearch.value = '';
    elements.quantity.value = '1';
    updateFoodInfo();
}

// Add custom food to current meal
function addCustomFoodToMeal() {
    const name = elements.customFoodName.value.trim();
    const carbs = parseFloat(elements.customCarbs.value) || 0;
    const gi = parseInt(elements.customGI.value) || 50;
    const quantity = parseFloat(elements.quantity.value) || 1;
    
    if (!name) {
        showError('Please enter a food name.');
        return;
    }
    
    if (carbs < 0) {
        showError('Please enter a valid carbohydrate amount.');
        return;
    }
    
    const mealItem = {
        name: name,
        serving: 'custom serving',
        quantity: quantity,
        carbs: carbs * quantity,
        calories: carbs * 4 * quantity, // Approximate calories from carbs
        gi: gi,
        category: 'custom',
        isCustom: true
    };
    
    currentMeal.push(mealItem);
    updateMealSummary();
    
    // Reset form
    elements.customFoodName.value = '';
    elements.customCarbs.value = '';
    elements.customGI.value = '';
}

// Update meal summary display
function updateMealSummary() {
    if (currentMeal.length === 0) {
        elements.mealItems.innerHTML = '<p>No items added yet</p>';
        elements.totalCarbs.textContent = '0';
        elements.totalCalories.textContent = '0';
        return;
    }
    
    let totalCarbs = 0;
    let totalCalories = 0;
    
    const itemsHtml = currentMeal.map((item, index) => {
        totalCarbs += item.carbs;
        totalCalories += item.calories;
        
        return `
            <div class="meal-item">
                <div class="meal-item-info">
                    <div class="meal-item-name">${item.name}</div>
                    <div class="meal-item-details">
                        ${item.quantity} × ${item.serving} | ${item.carbs.toFixed(1)}g carbs | ${Math.round(item.calories)} cal
                    </div>
                </div>
                <button class="remove-item-btn" onclick="removeMealItem(${index})">Remove</button>
            </div>
        `;
    }).join('');
    
    elements.mealItems.innerHTML = itemsHtml;
    elements.totalCarbs.textContent = totalCarbs.toFixed(1);
    elements.totalCalories.textContent = Math.round(totalCalories).toString();
}

// Remove meal item
function removeMealItem(index) {
    currentMeal.splice(index, 1);
    updateMealSummary();
}

// Validate form inputs
function validateInput(event) {
    const input = event.target;
    const value = parseFloat(input.value);
    
    // Clear previous error styling
    input.classList.remove('error');
    
    // Validation rules
    switch (input.id) {
        case 'age':
            if (value < 18 || value > 100) {
                input.classList.add('error');
            }
            break;
        case 'weight':
            if (value < 30 || value > 200) {
                input.classList.add('error');
            }
            break;
        case 'height':
            if (value < 100 || value > 250) {
                input.classList.add('error');
            }
            break;
        case 'currentBG':
            if (value < 30 || value > 500) {
                input.classList.add('error');
            }
            break;
    }
}

// Calculate blood sugar and insulin predictions
function calculatePredictions() {
    // Validate required inputs
    if (!validateRequiredInputs()) {
        return;
    }
    
    if (currentMeal.length === 0) {
        showError('Please add at least one food item to your meal.');
        return;
    }
    
    // Get patient data
    const patientData = {
        age: parseFloat(elements.age.value),
        weight: parseFloat(elements.weight.value),
        height: parseFloat(elements.height.value),
        diabetesType: elements.diabetesType.value,
        currentBG: parseFloat(elements.currentBG.value),
        timeSinceLastMeal: parseFloat(elements.timeSinceLastMeal.value)
    };
    
    // Calculate meal totals
    const mealData = calculateMealData();
    
    // Generate predictions
    const predictions = generatePredictions(patientData, mealData);
    
    // Display results
    displayResults(predictions, patientData, mealData);
    
    // Add to history
    addToHistory(patientData, mealData, predictions);
}

// Validate required inputs
function validateRequiredInputs() {
    const requiredFields = [
        { element: elements.age, name: 'Age', min: 18, max: 100 },
        { element: elements.weight, name: 'Weight', min: 30, max: 200 },
        { element: elements.height, name: 'Height', min: 100, max: 250 },
        { element: elements.currentBG, name: 'Current Blood Sugar', min: 30, max: 500 },
        { element: elements.diabetesType, name: 'Diabetes Type', isSelect: true }
    ];
    
    for (const field of requiredFields) {
        const value = field.isSelect ? field.element.value : parseFloat(field.element.value);
        
        if (field.isSelect && !value) {
            showError(`Please select ${field.name}.`);
            return false;
        }
        
        if (!field.isSelect && (isNaN(value) || value < field.min || value > field.max)) {
            showError(`${field.name} must be between ${field.min} and ${field.max}.`);
            return false;
        }
    }
    
    return true;
}

// Calculate meal data
function calculateMealData() {
    let totalCarbs = 0;
    let totalCalories = 0;
    let weightedGI = 0;
    let totalCarbsForGI = 0;
    
    currentMeal.forEach(item => {
        totalCarbs += item.carbs;
        totalCalories += item.calories;
        if (item.carbs > 0) {
            weightedGI += item.gi * item.carbs;
            totalCarbsForGI += item.carbs;
        }
    });
    
    const averageGI = totalCarbsForGI > 0 ? weightedGI / totalCarbsForGI : 50;
    
    return {
        totalCarbs,
        totalCalories,
        averageGI,
        items: [...currentMeal]
    };
}

// Generate blood sugar and insulin predictions
function generatePredictions(patientData, mealData) {
    const { totalCarbs, averageGI } = mealData;
    const { diabetesType, currentBG, weight, age, timeSinceLastMeal } = patientData;
    
    // Calculate BMI for individual factors
    const height = patientData.height / 100; // Convert to meters
    const bmi = weight / (height * height);
    
    // Base carb impact (mg/dL per gram of carbs)
    const baseImpact = diabetesType === 'type1' ? 4 : 2.5;
    
    // GI multiplier
    let giMultiplier = 1.0;
    if (averageGI > 70) giMultiplier = 1.2; // High GI
    else if (averageGI < 55) giMultiplier = 0.8; // Low GI
    
    // Individual factors
    const ageImpact = age > 65 ? 1.1 : 1.0;
    const weightImpact = bmi > 30 ? 0.9 : bmi < 20 ? 1.1 : 1.0;
    
    // Time since last meal impact
    const timeImpact = timeSinceLastMeal > 3 ? 1.1 : timeSinceLastMeal < 1 ? 0.8 : 1.0;
    
    // Calculate blood sugar increase
    const bgIncrease = totalCarbs * baseImpact * giMultiplier * ageImpact * weightImpact * timeImpact;
    const peakBG = currentBG + bgIncrease;
    
    // Calculate time to peak (1-2 hours typically)
    const timeToPeak = averageGI > 70 ? 1.0 : averageGI > 55 ? 1.25 : 1.5;
    
    // Generate time series for chart
    const timePoints = [];
    const bgValues = [];
    const timeRange = 4; // 4 hours
    const steps = 16; // 15-minute intervals
    
    for (let i = 0; i <= steps; i++) {
        const time = (i / steps) * timeRange;
        timePoints.push(time);
        
        let bgValue;
        if (time <= timeToPeak) {
            // Rising phase
            const progress = time / timeToPeak;
            const curve = Math.sin(progress * Math.PI / 2); // Smooth curve
            bgValue = currentBG + (bgIncrease * curve);
        } else {
            // Falling phase
            const fallTime = time - timeToPeak;
            const fallRate = diabetesType === 'type1' ? 20 : 15; // mg/dL per hour
            bgValue = peakBG - (fallTime * fallRate);
        }
        
        bgValues.push(Math.max(bgValue, 70)); // Minimum BG
    }
    
    // Insulin calculations
    const insulinCalc = calculateInsulinDose(patientData, mealData, peakBG);
    
    // Risk assessment
    const riskLevel = assessRisk(peakBG);
    
    return {
        currentBG,
        peakBG: Math.round(peakBG),
        bgIncrease: Math.round(bgIncrease),
        timeToPeak,
        timePoints,
        bgValues,
        insulinDose: insulinCalc.totalDose,
        insulinBreakdown: insulinCalc.breakdown,
        riskLevel,
        recommendations: generateRecommendations(patientData, mealData, peakBG, riskLevel)
    };
}

// Calculate insulin dose
function calculateInsulinDose(patientData, mealData, peakBG) {
    const { diabetesType, currentBG } = patientData;
    const { totalCarbs } = mealData;
    
    // Insulin-to-carb ratios
    const carbRatio = diabetesType === 'type1' ? 12 : 15; // grams carbs per unit insulin
    
    // Correction factors (mg/dL per unit insulin)
    const correctionFactor = diabetesType === 'type1' ? 40 : 50;
    
    // Target blood sugar
    const targetBG = 120;
    
    // Calculate doses
    const carbCoverage = totalCarbs / carbRatio;
    const correctionNeeded = Math.max(0, (peakBG - targetBG) / correctionFactor);
    const totalDose = carbCoverage + correctionNeeded;
    
    return {
        totalDose: Math.round(totalDose * 10) / 10, // Round to 1 decimal
        breakdown: {
            carbCoverage: Math.round(carbCoverage * 10) / 10,
            correction: Math.round(correctionNeeded * 10) / 10,
            carbRatio,
            correctionFactor
        }
    };
}

// Assess risk level
function assessRisk(peakBG) {
    if (peakBG < 70) return { level: 'critical', text: 'HYPOGLYCEMIA RISK', color: 'risk-critical' };
    if (peakBG < 90) return { level: 'low', text: 'Low Blood Sugar', color: 'risk-medium' };
    if (peakBG <= 180) return { level: 'normal', text: 'Normal Range', color: 'risk-low' };
    if (peakBG <= 250) return { level: 'high', text: 'High Blood Sugar', color: 'risk-high' };
    return { level: 'critical', text: 'VERY HIGH - CRITICAL', color: 'risk-critical' };
}

// Generate recommendations
function generateRecommendations(patientData, mealData, peakBG, riskLevel) {
    const recommendations = [];
    
    if (riskLevel.level === 'critical' && peakBG > 250) {
        recommendations.push({
            type: 'URGENT',
            text: 'Predicted blood sugar is very high. Consider reducing portion sizes or choosing lower-carb alternatives. Consult your healthcare provider.'
        });
    }
    
    if (riskLevel.level === 'high') {
        recommendations.push({
            type: 'PORTION',
            text: 'Consider reducing meal size by 25-50% to lower blood sugar impact.'
        });
        
        // Suggest alternatives for high-GI foods
        const highGIFoods = mealData.items.filter(item => item.gi > 70);
        if (highGIFoods.length > 0) {
            recommendations.push({
                type: 'ALTERNATIVES',
                text: `Consider lower-GI alternatives: ${generateAlternatives(highGIFoods)}`
            });
        }
    }
    
    if (mealData.totalCarbs > 60) {
        recommendations.push({
            type: 'TIMING',
            text: 'High-carb meal detected. Consider splitting into smaller portions or adding protein/fiber to slow absorption.'
        });
    }
    
    recommendations.push({
        type: 'MONITORING',
        text: 'Test blood sugar 2-3 hours after eating to validate predictions and adjust future calculations.'
    });
    
    return recommendations;
}

// Generate food alternatives
function generateAlternatives(highGIFoods) {
    const alternatives = {
        'White Bread': 'whole wheat bread or pumpernickel',
        'White Rice': 'brown rice or quinoa',
        'Potato (baked)': 'sweet potato or cauliflower',
        'Watermelon': 'berries or apple',
        'Bagel': 'whole grain English muffin',
        'Crackers': 'nuts or seeds'
    };
    
    return highGIFoods.map(food => 
        alternatives[food.name] || 'lower-GI option'
    ).join(', ');
}

// Display prediction results
function displayResults(predictions, patientData, mealData) {
    const resultsHtml = `
        <div class="prediction-result">
            <div class="result-card">
                <div class="result-header">Blood Sugar Prediction</div>
                <div class="result-value">
                    ${predictions.peakBG}
                    <span class="result-unit">mg/dL</span>
                    <span class="risk-badge ${predictions.riskLevel.color}">${predictions.riskLevel.text}</span>
                </div>
                <div class="result-description">
                    Expected peak in ${predictions.timeToPeak} hours<br>
                    Increase: +${predictions.bgIncrease} mg/dL from current level
                </div>
            </div>
            
            <div class="result-card">
                <div class="result-header">Insulin Recommendation</div>
                <div class="result-value">
                    ${predictions.insulinDose}
                    <span class="result-unit">units</span>
                </div>
                <div class="insulin-breakdown">
                    <div class="breakdown-item">
                        <span class="breakdown-label">Carb coverage (${mealData.totalCarbs.toFixed(1)}g ÷ ${predictions.insulinBreakdown.carbRatio}):</span>
                        <span class="breakdown-value">${predictions.insulinBreakdown.carbCoverage} units</span>
                    </div>
                    <div class="breakdown-item">
                        <span class="breakdown-label">Correction dose:</span>
                        <span class="breakdown-value">${predictions.insulinBreakdown.correction} units</span>
                    </div>
                    <div class="breakdown-item breakdown-total">
                        <span class="breakdown-label">Total recommended dose:</span>
                        <span class="breakdown-value">${predictions.insulinDose} units</span>
                    </div>
                </div>
            </div>
            
            <div class="timeline-prediction">
                <div class="timeline-header">Predicted Timeline</div>
                <table class="timeline-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Blood Sugar</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="timeline-time">Now</td>
                            <td class="timeline-bg">${patientData.currentBG} mg/dL</td>
                            <td>Current level</td>
                        </tr>
                        <tr>
                            <td class="timeline-time">${predictions.timeToPeak}h</td>
                            <td class="timeline-bg">${predictions.peakBG} mg/dL</td>
                            <td>Peak level</td>
                        </tr>
                        <tr>
                            <td class="timeline-time">3h</td>
                            <td class="timeline-bg">${Math.round(predictions.bgValues[12])} mg/dL</td>
                            <td>Declining</td>
                        </tr>
                        <tr>
                            <td class="timeline-time">4h</td>
                            <td class="timeline-bg">${Math.round(predictions.bgValues[15])} mg/dL</td>
                            <td>Stabilizing</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    elements.resultsContent.innerHTML = resultsHtml;
    
    // Show and update chart
    elements.chartContainer.style.display = 'block';
    updateChart(predictions);
    
    // Show recommendations
    displayRecommendations(predictions.recommendations);
}

// Update blood sugar chart
function updateChart(predictions) {
    const ctx = document.getElementById('bgChart').getContext('2d');
    
    // Destroy existing chart
    if (chart) {
        chart.destroy();
    }
    
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: predictions.timePoints.map(t => `${t.toFixed(1)}h`),
            datasets: [{
                label: 'Blood Sugar (mg/dL)',
                data: predictions.bgValues,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#1FB8CD'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Predicted Blood Sugar Timeline',
                    font: { size: 16, weight: 'bold' }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time (hours)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Blood Sugar (mg/dL)'
                    },
                    min: 60,
                    max: Math.max(300, Math.max(...predictions.bgValues) + 20)
                }
            },
            elements: {
                point: {
                    hoverRadius: 8
                }
            }
        }
    });
    
    // Add reference lines
    chart.options.plugins.annotation = {
        annotations: {
            normalLow: {
                type: 'line',
                yMin: 80,
                yMax: 80,
                borderColor: 'green',
                borderWidth: 2,
                borderDash: [5, 5],
                label: {
                    content: 'Normal Low',
                    enabled: true
                }
            },
            normalHigh: {
                type: 'line',
                yMin: 180,
                yMax: 180,
                borderColor: 'orange',
                borderWidth: 2,
                borderDash: [5, 5],
                label: {
                    content: 'Target Upper',
                    enabled: true
                }
            }
        }
    };
}

// Display recommendations
function displayRecommendations(recommendations) {
    if (recommendations.length === 0) {
        elements.recommendations.style.display = 'none';
        return;
    }
    
    const recommendationsHtml = recommendations.map(rec => `
        <div class="recommendation-item">
            <div class="recommendation-type">${rec.type}</div>
            <div class="recommendation-text">${rec.text}</div>
        </div>
    `).join('');
    
    elements.recommendationsList.innerHTML = recommendationsHtml;
    elements.recommendations.style.display = 'block';
}

// Add prediction to history
function addToHistory(patientData, mealData, predictions) {
    const historyItem = {
        timestamp: new Date(),
        foods: mealData.items.map(item => `${item.name} (${item.quantity})`).join(', '),
        totalCarbs: mealData.totalCarbs.toFixed(1),
        predictedPeak: predictions.peakBG,
        insulinDose: predictions.insulinDose
    };
    
    mealHistory.push(historyItem);
    updateHistoryTable();
    
    // Don't clear the current meal - users should be able to see what they calculated for
    // currentMeal = [];
    // updateMealSummary();
}

// Update history table
function updateHistoryTable() {
    if (mealHistory.length === 0) {
        elements.historyTableBody.innerHTML = '<tr><td colspan="5" class="no-history">No meal history yet</td></tr>';
        return;
    }
    
    const historyHtml = mealHistory.slice(-10).reverse().map(item => `
        <tr>
            <td>${item.timestamp.toLocaleTimeString()}</td>
            <td>${item.foods}</td>
            <td>${item.totalCarbs}g</td>
            <td>${item.predictedPeak} mg/dL</td>
            <td>${item.insulinDose} units</td>
        </tr>
    `).join('');
    
    elements.historyTableBody.innerHTML = historyHtml;
}

// Utility functions
function getGICategory(gi) {
    if (gi < 55) return 'Low';
    if (gi <= 70) return 'Medium';
    return 'High';
}

function showError(message) {
    // Remove existing error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    
    // Create new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Insert at top of main content
    const mainGrid = document.querySelector('.main-grid');
    mainGrid.insertBefore(errorDiv, mainGrid.firstChild);
    
    // Remove after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}
