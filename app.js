// قاعدة بيانات الأطعمة مع الرموز التعبيرية
const foodDatabase = [
  {"name": "خبز أبيض", "english": "White Bread", "serving": "شريحة واحدة", "carbs": 15, "calories": 80, "gi": 75, "category": "حبوب", "emoji": "🍞"},
  {"name": "خبز كامل", "english": "Whole Wheat Bread", "serving": "شريحة واحدة", "carbs": 15, "calories": 80, "gi": 74, "category": "حبوب", "emoji": "🥖"},
  {"name": "أرز أبيض", "english": "White Rice", "serving": "كوب مطبوخ", "carbs": 45, "calories": 205, "gi": 73, "category": "حبوب", "emoji": "🍚"},
  {"name": "أرز بني", "english": "Brown Rice", "serving": "كوب مطبوخ", "carbs": 45, "calories": 216, "gi": 68, "category": "حبوب", "emoji": "🍙"},
  {"name": "مكرونة", "english": "Pasta", "serving": "كوب مطبوخ", "carbs": 45, "calories": 220, "gi": 49, "category": "حبوب", "emoji": "🍝"},
  {"name": "شوفان", "english": "Oatmeal", "serving": "كوب مطبوخ", "carbs": 30, "calories": 154, "gi": 55, "category": "حبوب", "emoji": "🥣"},
  {"name": "كينوا", "english": "Quinoa", "serving": "كوب مطبوخ", "carbs": 39, "calories": 222, "gi": 53, "category": "حبوب", "emoji": "🌾"},
  {"name": "بيجل", "english": "Bagel", "serving": "حبة متوسطة", "carbs": 45, "calories": 245, "gi": 72, "category": "حبوب", "emoji": "🥯"},
  {"name": "تفاح", "english": "Apple", "serving": "حبة متوسطة", "carbs": 25, "calories": 95, "gi": 36, "category": "فواكه", "emoji": "🍎"},
  {"name": "موز", "english": "Banana", "serving": "حبة متوسطة", "carbs": 27, "calories": 105, "gi": 51, "category": "فواكه", "emoji": "🍌"},
  {"name": "برتقال", "english": "Orange", "serving": "حبة متوسطة", "carbs": 15, "calories": 62, "gi": 43, "category": "فواكه", "emoji": "🍊"},
  {"name": "عنب", "english": "Grapes", "serving": "كوب", "carbs": 16, "calories": 62, "gi": 46, "category": "فواكه", "emoji": "🍇"},
  {"name": "بطيخ", "english": "Watermelon", "serving": "كوب مقطع", "carbs": 12, "calories": 46, "gi": 76, "category": "فواكه", "emoji": "🍉"},
  {"name": "تمر", "english": "Dates", "serving": "3 حبات", "carbs": 54, "calories": 200, "gi": 42, "category": "فواكه", "emoji": "🫒"},
  {"name": "فراولة", "english": "Strawberries", "serving": "كوب", "carbs": 11, "calories": 49, "gi": 40, "category": "فواكه", "emoji": "🍓"},
  {"name": "مانجو", "english": "Mango", "serving": "كوب مقطع", "carbs": 25, "calories": 107, "gi": 51, "category": "فواكه", "emoji": "🥭"},
  {"name": "أناناس", "english": "Pineapple", "serving": "كوب مقطع", "carbs": 22, "calories": 82, "gi": 59, "category": "فواكه", "emoji": "🍍"},
  {"name": "بطاطس مشوية", "english": "Potato (baked)", "serving": "حبة متوسطة", "carbs": 37, "calories": 161, "gi": 78, "category": "خضروات", "emoji": "🥔"},
  {"name": "بطاطا حلوة", "english": "Sweet Potato", "serving": "حبة متوسطة", "carbs": 24, "calories": 112, "gi": 63, "category": "خضروات", "emoji": "🍠"},
  {"name": "ذرة", "english": "Corn", "serving": "كوب", "carbs": 31, "calories": 125, "gi": 52, "category": "خضروات", "emoji": "🌽"},
  {"name": "جزر", "english": "Carrots", "serving": "كوب نيء", "carbs": 12, "calories": 52, "gi": 39, "category": "خضروات", "emoji": "🥕"},
  {"name": "بروكلي", "english": "Broccoli", "serving": "كوب", "carbs": 6, "calories": 25, "gi": 10, "category": "خضروات", "emoji": "🥦"},
  {"name": "بازلاء خضراء", "english": "Green Peas", "serving": "كوب", "carbs": 21, "calories": 118, "gi": 48, "category": "خضروات", "emoji": "🫛"},
  {"name": "حليب قليل الدسم", "english": "Milk (1%)", "serving": "كوب", "carbs": 13, "calories": 102, "gi": 37, "category": "ألبان", "emoji": "🥛"},
  {"name": "لبن زبادي", "english": "Yogurt (plain)", "serving": "6 أونس", "carbs": 12, "calories": 100, "gi": 41, "category": "ألبان", "emoji": "🍨"},
  {"name": "لبن يوناني", "english": "Greek Yogurt", "serving": "6 أونس", "carbs": 6, "calories": 100, "gi": 11, "category": "ألبان", "emoji": "🥛"},
  {"name": "آيس كريم", "english": "Ice Cream", "serving": "نصف كوب", "carbs": 16, "calories": 137, "gi": 51, "category": "ألبان", "emoji": "🍦"},
  {"name": "فاصولياء سوداء", "english": "Black Beans", "serving": "كوب مطبوخ", "carbs": 41, "calories": 227, "gi": 30, "category": "بقوليات", "emoji": "🫘"},
  {"name": "حمص", "english": "Chickpeas", "serving": "كوب مطبوخ", "carbs": 45, "calories": 269, "gi": 28, "category": "بقوليات", "emoji": "🫛"},
  {"name": "عدس", "english": "Lentils", "serving": "كوب مطبوخ", "carbs": 40, "calories": 230, "gi": 32, "category": "بقوليات", "emoji": "🫘"},
  {"name": "فاصولياء حمراء", "english": "Kidney Beans", "serving": "كوب مطبوخ", "carbs": 40, "calories": 225, "gi": 24, "category": "بقوليات", "emoji": "🫘"},
  {"name": "شوكولاتة", "english": "Chocolate", "serving": "أونس واحد", "carbs": 16, "calories": 155, "gi": 40, "category": "حلويات", "emoji": "🍫"},
  {"name": "فشار", "english": "Popcorn", "serving": "3 أكواب", "carbs": 19, "calories": 93, "gi": 65, "category": "وجبات خفيفة", "emoji": "🍿"},
  {"name": "بسكويت مملح", "english": "Crackers", "serving": "5 قطع", "carbs": 11, "calories": 60, "gi": 70, "category": "وجبات خفيفة", "emoji": "🍪"},
  {"name": "لوح جرانولا", "english": "Granola Bar", "serving": "لوح واحد", "carbs": 29, "calories": 140, "gi": 61, "category": "وجبات خفيفة", "emoji": "🍫"},
  {"name": "رقائق بطاطس", "english": "Potato Chips", "serving": "أونس واحد", "carbs": 15, "calories": 152, "gi": 56, "category": "وجبات خفيفة", "emoji": "🥔"},
  {"name": "سكر أبيض", "english": "White Sugar", "serving": "ملعقة كبيرة", "carbs": 15, "calories": 49, "gi": 65, "category": "حلويات", "emoji": "🧊"},
  {"name": "عسل", "english": "Honey", "serving": "ملعقة كبيرة", "carbs": 17, "calories": 64, "gi": 61, "category": "حلويات", "emoji": "🍯"},
  {"name": "كعكة فانيليا", "english": "Cake (vanilla)", "serving": "شريحة", "carbs": 42, "calories": 239, "gi": 78, "category": "حلويات", "emoji": "🍰"}
];

// متغيرات التطبيق
let currentStep = 1;
let currentMeal = [];
let chart = null;

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    console.log('تم تحميل التطبيق');
    initializeApp();
});

function initializeApp() {
    // إظهار المودال التحذيري
    showDisclaimer();
    
    // إعداد مستمعي الأحداث
    setupEventListeners();
    
    // ملء قوائم الطعام
    populateFoodDropdowns();
    
    // تحديث العرض
    updateMealDisplay();
    updateFoodPreview();
}

function showDisclaimer() {
    const disclaimerModal = document.getElementById('disclaimerModal');
    if (disclaimerModal) {
        disclaimerModal.classList.remove('hidden');
    }
}

function setupEventListeners() {
    // أزرار التنقل الرئيسية
    const startBtn = document.getElementById('startBtn');
    const backToWelcome = document.getElementById('backToWelcome');
    const agreeBtn = document.getElementById('agreeBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (startBtn) {
        startBtn.onclick = startApp;
    }
    
    if (backToWelcome) {
        backToWelcome.onclick = backToWelcome;
    }
    
    if (agreeBtn) {
        agreeBtn.onclick = closeDisclaimer;
    }
    
    if (modalOverlay) {
        modalOverlay.onclick = closeDisclaimer;
    }
    
    // أزرار التنقل بين الخطوات
    const nextStep1 = document.getElementById('nextStep1');
    const prevStep2 = document.getElementById('prevStep2');
    const nextStep2 = document.getElementById('nextStep2');
    const prevStep3 = document.getElementById('prevStep3');
    const startOver = document.getElementById('startOver');
    
    if (nextStep1) {
        nextStep1.onclick = function() {
            console.log('تم النقر على زر التالي للخطوة 1');
            if (validateStep1()) {
                navigateToStep(2);
            }
        };
    }
    
    if (prevStep2) {
        prevStep2.onclick = () => navigateToStep(1);
    }
    
    if (nextStep2) {
        nextStep2.onclick = function() {
            if (validateStep2()) {
                navigateToStep(3);
            }
        };
    }
    
    if (prevStep3) {
        prevStep3.onclick = () => navigateToStep(2);
    }
    
    if (startOver) {
        startOver.onclick = startOver;
    }
    
    // حسابات BMI
    const ageInput = document.getElementById('age');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    
    if (ageInput) {
        ageInput.oninput = calculateBMI;
        ageInput.onchange = calculateBMI;
    }
    if (weightInput) {
        weightInput.oninput = calculateBMI;
        weightInput.onchange = calculateBMI;
    }
    if (heightInput) {
        heightInput.oninput = calculateBMI;
        heightInput.onchange = calculateBMI;
    }
    
    // اختيار الطعام
    const foodCategory = document.getElementById('foodCategory');
    const foodSearch = document.getElementById('foodSearch');
    const quantity = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const increaseBtn = document.getElementById('increaseBtn');
    const addFoodBtn = document.getElementById('addFoodBtn');
    
    if (foodCategory) {
        foodCategory.onchange = filterFoodsByCategory;
    }
    
    if (foodSearch) {
        foodSearch.onchange = updateFoodPreview;
    }
    
    if (quantity) {
        quantity.oninput = updateFoodPreview;
        quantity.onchange = updateFoodPreview;
    }
    
    if (decreaseBtn) {
        decreaseBtn.onclick = () => adjustQuantity(-0.1);
    }
    
    if (increaseBtn) {
        increaseBtn.onclick = () => adjustQuantity(0.1);
    }
    
    if (addFoodBtn) {
        addFoodBtn.onclick = addFoodToMeal;
    }
}

function startApp() {
    const welcomeSection = document.getElementById('welcomeSection');
    const appContainer = document.getElementById('appContainer');
    
    if (welcomeSection) {
        welcomeSection.classList.add('hidden');
    }
    if (appContainer) {
        appContainer.classList.remove('hidden');
    }
    
    navigateToStep(1);
}

function backToWelcomeFunc() {
    const appContainer = document.getElementById('appContainer');
    const welcomeSection = document.getElementById('welcomeSection');
    
    if (appContainer) {
        appContainer.classList.add('hidden');
    }
    if (welcomeSection) {
        welcomeSection.classList.remove('hidden');
    }
    
    resetApp();
}

function closeDisclaimer() {
    const disclaimerModal = document.getElementById('disclaimerModal');
    if (disclaimerModal) {
        disclaimerModal.classList.add('hidden');
    }
}

function navigateToStep(stepNumber) {
    console.log(`الانتقال للخطوة ${stepNumber}`);
    
    // إخفاء جميع الخطوات
    document.querySelectorAll('.step-container').forEach(step => {
        step.classList.remove('active');
    });
    
    // إظهار الخطوة المطلوبة
    const targetStep = document.getElementById(`step${stepNumber}`);
    if (targetStep) {
        targetStep.classList.add('active');
        currentStep = stepNumber;
        
        // تحديث شريط التقدم
        updateProgress();
        
        console.log(`تم الانتقال بنجاح للخطوة ${stepNumber}`);
        
        // تنفيذ إجراءات خاصة بالخطوة
        if (stepNumber === 3) {
            calculatePredictions();
        }
    }
}

function updateProgress() {
    const progress = (currentStep / 3) * 100;
    const progressFill = document.getElementById('progressFill');
    const stepIndicator = document.getElementById('stepIndicator');
    
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    if (stepIndicator) {
        stepIndicator.textContent = `الخطوة ${currentStep} من 3`;
    }
}

function calculateBMI() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const bmiValue = document.getElementById('bmiValue');
    
    if (!weightInput || !heightInput || !bmiValue) return;
    
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    
    if (weight > 0 && height > 0) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const bmiText = bmi.toFixed(1);
        let category = '';
        
        if (bmi < 18.5) category = '(نحيف)';
        else if (bmi < 25) category = '(طبيعي)';
        else if (bmi < 30) category = '(زيادة وزن)';
        else category = '(سمنة)';
        
        bmiValue.textContent = `${bmiText} ${category}`;
        console.log(`تم حساب BMI: ${bmiText} ${category}`);
    } else {
        bmiValue.textContent = '--';
    }
}

function populateFoodDropdowns() {
    const foodSearch = document.getElementById('foodSearch');
    if (!foodSearch) return;
    
    const sortedFoods = [...foodDatabase].sort((a, b) => a.name.localeCompare(b.name, 'ar'));
    
    sortedFoods.forEach(food => {
        const option = document.createElement('option');
        option.value = food.name;
        option.textContent = `${food.emoji} ${food.name}`;
        foodSearch.appendChild(option);
    });
}

function filterFoodsByCategory() {
    const foodCategory = document.getElementById('foodCategory');
    const foodSearch = document.getElementById('foodSearch');
    
    if (!foodCategory || !foodSearch) return;
    
    const selectedCategory = foodCategory.value;
    
    // إزالة الخيارات الموجودة (عدا الأول)
    while (foodSearch.children.length > 1) {
        foodSearch.removeChild(foodSearch.lastChild);
    }
    
    // إضافة الأطعمة المفلترة
    let filteredFoods = selectedCategory ? 
        foodDatabase.filter(food => food.category === selectedCategory) : 
        foodDatabase;
    
    filteredFoods.sort((a, b) => a.name.localeCompare(b.name, 'ar')).forEach(food => {
        const option = document.createElement('option');
        option.value = food.name;
        option.textContent = `${food.emoji} ${food.name}`;
        foodSearch.appendChild(option);
    });
    
    updateFoodPreview();
}

function updateFoodPreview() {
    const foodPreview = document.getElementById('foodPreview');
    const foodSearch = document.getElementById('foodSearch');
    const quantity = document.getElementById('quantity');
    
    if (!foodPreview || !foodSearch || !quantity) return;
    
    const selectedFoodName = foodSearch.value;
    const quantityValue = parseFloat(quantity.value) || 1;
    
    if (!selectedFoodName) {
        foodPreview.innerHTML = '<div class="no-selection">اختر طعاماً لمشاهدة المعلومات</div>';
        return;
    }
    
    const food = foodDatabase.find(f => f.name === selectedFoodName);
    if (!food) return;
    
    const totalCarbs = (food.carbs * quantityValue).toFixed(1);
    const totalCalories = Math.round(food.calories * quantityValue);
    
    foodPreview.innerHTML = `
        <div class="food-details">
            <div class="food-name">${food.emoji} ${food.name}</div>
            <div class="food-info-item">
                <span>الحصة:</span>
                <span>${food.serving} × ${quantityValue}</span>
            </div>
            <div class="food-info-item">
                <span>الكربوهيدرات:</span>
                <span>${totalCarbs} غرام</span>
            </div>
            <div class="food-info-item">
                <span>السعرات:</span>
                <span>${totalCalories}</span>
            </div>
            <div class="food-info-item">
                <span>المؤشر الغلايسيمي:</span>
                <span>${food.gi} (${getGICategory(food.gi)})</span>
            </div>
        </div>
    `;
}

function adjustQuantity(delta) {
    const quantity = document.getElementById('quantity');
    if (!quantity) return;
    
    const currentValue = parseFloat(quantity.value) || 1;
    const newValue = Math.max(0.1, currentValue + delta);
    quantity.value = newValue.toFixed(1);
    updateFoodPreview();
}

function addFoodToMeal() {
    const foodSearch = document.getElementById('foodSearch');
    const quantity = document.getElementById('quantity');
    
    if (!foodSearch || !quantity) return;
    
    const selectedFoodName = foodSearch.value;
    const quantityValue = parseFloat(quantity.value) || 1;
    
    if (!selectedFoodName) {
        alert('الرجاء اختيار طعام أولاً');
        return;
    }
    
    const food = foodDatabase.find(f => f.name === selectedFoodName);
    if (!food) return;
    
    const mealItem = {
        id: Date.now(),
        name: food.name,
        emoji: food.emoji,
        serving: food.serving,
        quantity: quantityValue,
        carbs: food.carbs * quantityValue,
        calories: food.calories * quantityValue,
        gi: food.gi,
        category: food.category
    };
    
    currentMeal.push(mealItem);
    updateMealDisplay();
    
    // إعادة تعيين الاختيار
    foodSearch.value = '';
    quantity.value = '1';
    updateFoodPreview();
}

function removeFoodFromMeal(itemId) {
    currentMeal = currentMeal.filter(item => item.id !== itemId);
    updateMealDisplay();
}

function updateMealDisplay() {
    const mealItems = document.getElementById('mealItems');
    const totalCarbs = document.getElementById('totalCarbs');
    const totalCalories = document.getElementById('totalCalories');
    
    if (!mealItems || !totalCarbs || !totalCalories) return;
    
    if (currentMeal.length === 0) {
        mealItems.innerHTML = '<div class="empty-meal">لم تضف أي طعام بعد</div>';
        totalCarbs.textContent = '0 غرام';
        totalCalories.textContent = '0';
        return;
    }
    
    let carbsSum = 0;
    let caloriesSum = 0;
    
    const itemsHtml = currentMeal.map(item => {
        carbsSum += item.carbs;
        caloriesSum += item.calories;
        
        return `
            <div class="meal-item">
                <div class="meal-item-info">
                    <div class="meal-item-name">${item.emoji} ${item.name}</div>
                    <div class="meal-item-details">
                        ${item.quantity} × ${item.serving} | ${item.carbs.toFixed(1)} غرام كربوهيدرات
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFoodFromMeal(${item.id})">×</button>
            </div>
        `;
    }).join('');
    
    mealItems.innerHTML = itemsHtml;
    totalCarbs.textContent = `${carbsSum.toFixed(1)} غرام`;
    totalCalories.textContent = Math.round(caloriesSum).toString();
}

function validateStep1() {
    const age = document.getElementById('age');
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const diabetesType = document.getElementById('diabetesType');
    const currentBG = document.getElementById('currentBG');
    
    if (!age || !weight || !height || !diabetesType || !currentBG) {
        console.error('عناصر النموذج غير موجودة');
        return false;
    }
    
    const ageValue = parseFloat(age.value);
    const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value);
    const diabetesTypeValue = diabetesType.value;
    const currentBGValue = parseFloat(currentBG.value);
    
    if (!ageValue || ageValue < 18 || ageValue > 100) {
        alert('يرجى إدخال عمر صحيح بين 18 و 100 سنة');
        return false;
    }
    
    if (!weightValue || weightValue < 30 || weightValue > 200) {
        alert('يرجى إدخال وزن صحيح بين 30 و 200 كيلوغرام');
        return false;
    }
    
    if (!heightValue || heightValue < 100 || heightValue > 250) {
        alert('يرجى إدخال طول صحيح بين 100 و 250 سم');
        return false;
    }
    
    if (!diabetesTypeValue) {
        alert('يرجى اختيار نوع السكري');
        return false;
    }
    
    if (!currentBGValue || currentBGValue < 30 || currentBGValue > 500) {
        alert('يرجى إدخال مستوى سكر دم صحيح بين 30 و 500 ملغ/ديسيلتر');
        return false;
    }
    
    console.log('تم التحقق من بيانات الخطوة 1 بنجاح');
    return true;
}

function validateStep2() {
    if (currentMeal.length === 0) {
        alert('يرجى إضافة طعام واحد على الأقل لوجبتك');
        return false;
    }
    return true;
}

function calculatePredictions() {
    const resultsContainer = document.getElementById('resultsContainer');
    if (!resultsContainer) return;
    
    // إظهار حالة التحميل
    resultsContainer.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner"></div>
            <p>جاري حساب التوقعات...</p>
        </div>
    `;
    
    // محاكاة وقت المعالجة
    setTimeout(() => {
        const predictions = generatePredictions();
        displayResults(predictions);
    }, 2000);
}

function generatePredictions() {
    // جمع بيانات المريض
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const diabetesType = document.getElementById('diabetesType').value;
    const currentBG = parseFloat(document.getElementById('currentBG').value);
    const timeSinceLastMeal = parseFloat(document.getElementById('timeSinceLastMeal').value);
    
    // حساب إجماليات الوجبة
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
    
    // حساب التوقعات
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    const baseImpact = diabetesType === 'type1' ? 4 : 2.5;
    const giMultiplier = averageGI > 70 ? 1.2 : averageGI < 55 ? 0.8 : 1.0;
    const ageImpact = age > 65 ? 1.1 : 1.0;
    const bmiImpact = bmi > 30 ? 0.9 : bmi < 20 ? 1.1 : 1.0;
    const timeImpact = timeSinceLastMeal > 3 ? 1.1 : timeSinceLastMeal < 1 ? 0.8 : 1.0;
    
    const bgIncrease = totalCarbs * baseImpact * giMultiplier * ageImpact * bmiImpact * timeImpact;
    const peakBG = currentBG + bgIncrease;
    const timeToPeak = averageGI > 70 ? 1.0 : averageGI > 55 ? 1.25 : 1.5;
    
    // حساب الأنسولين
    const carbRatio = diabetesType === 'type1' ? 12 : 15;
    const correctionFactor = diabetesType === 'type1' ? 40 : 50;
    const targetBG = 120;
    
    const carbCoverage = totalCarbs / carbRatio;
    const correctionNeeded = Math.max(0, (peakBG - targetBG) / correctionFactor);
    const totalInsulinDose = carbCoverage + correctionNeeded;
    
    // تقييم المخاطر
    let riskLevel, riskText, riskClass;
    if (peakBG < 70) {
        riskLevel = 'critical'; riskText = 'خطر انخفاض السكر'; riskClass = 'risk-critical';
    } else if (peakBG < 90) {
        riskLevel = 'medium'; riskText = 'سكر دم منخفض'; riskClass = 'risk-medium';
    } else if (peakBG > 250) {
        riskLevel = 'critical'; riskText = 'مرتفع جداً - خطير'; riskClass = 'risk-critical';
    } else if (peakBG > 180) {
        riskLevel = 'high'; riskText = 'سكر دم مرتفع'; riskClass = 'risk-high';
    } else {
        riskLevel = 'low'; riskText = 'المدى الطبيعي'; riskClass = 'risk-low';
    }
    
    // البيانات للرسم البياني
    const timePoints = [];
    const bgValues = [];
    const timeRange = 4;
    const steps = 16;
    
    for (let i = 0; i <= steps; i++) {
        const time = (i / steps) * timeRange;
        timePoints.push(`${time.toFixed(1)} ساعة`);
        
        let bgValue;
        if (time <= timeToPeak) {
            const progress = time / timeToPeak;
            const curve = Math.sin(progress * Math.PI / 2);
            bgValue = currentBG + (bgIncrease * curve);
        } else {
            const fallTime = time - timeToPeak;
            const fallRate = diabetesType === 'type1' ? 20 : 15;
            bgValue = peakBG - (fallTime * fallRate);
        }
        bgValues.push(Math.max(bgValue, 70));
    }
    
    // إنشاء التوصيات
    const recommendations = generateRecommendations(peakBG, riskLevel, totalCarbs, currentMeal);
    
    return {
        currentBG, peakBG: Math.round(peakBG), timeToPeak,
        totalInsulinDose: Math.round(totalInsulinDose * 10) / 10,
        carbCoverage: Math.round(carbCoverage * 10) / 10,
        correction: Math.round(correctionNeeded * 10) / 10,
        riskLevel, riskText, riskClass, timePoints, bgValues, recommendations,
        totalCarbs: totalCarbs.toFixed(1), totalCalories: Math.round(totalCalories)
    };
}

function generateRecommendations(peakBG, riskLevel, totalCarbs, mealItems) {
    const recommendations = [];
    
    if (riskLevel === 'critical' && peakBG > 250) {
        recommendations.push({
            type: 'عاجل',
            text: 'سكر الدم المتوقع مرتفع جداً. فكر في تقليل أحجام الحصص أو اختيار بدائل أقل كربوهيدرات. استشر مقدم الرعاية الصحية فوراً.'
        });
    }
    
    if (riskLevel === 'high') {
        recommendations.push({
            type: 'الحصة',
            text: 'فكر في تقليل حجم الوجبة بنسبة 25-50% لتقليل تأثير سكر الدم.'
        });
    }
    
    if (totalCarbs > 60) {
        recommendations.push({
            type: 'التوقيت',
            text: 'وجبة عالية الكربوهيدرات. فكر في تقسيمها إلى حصص أصغر أو إضافة البروتين والألياف لإبطاء الامتصاص.'
        });
    }
    
    const highGIFoods = mealItems.filter(item => item.gi > 70);
    if (highGIFoods.length > 0) {
        recommendations.push({
            type: 'البدائل',
            text: `أطعمة عالية المؤشر الغلايسيمي في وجبتك: ${highGIFoods.map(f => f.name).join('، ')}. فكر في بدائل أقل في المؤشر الغلايسيمي.`
        });
    }
    
    recommendations.push({
        type: 'المراقبة',
        text: 'اختبر سكر الدم بعد 2-3 ساعات من الأكل للتحقق من التوقعات وتعديل الحسابات المستقبلية.'
    });
    
    return recommendations;
}

function displayResults(predictions) {
    const resultsContainer = document.getElementById('resultsContainer');
    if (!resultsContainer) return;
    
    const resultsHtml = `
        <div class="results-grid">
            <div class="result-card ${predictions.riskClass}">
                <div class="result-icon">🩸</div>
                <div class="result-title">توقع سكر الدم</div>
                <div class="result-value">${predictions.peakBG}</div>
                <div class="result-unit">ملغ/ديسيلتر</div>
                <div class="result-description">
                    ${predictions.riskText}<br>
                    الذروة في ${predictions.timeToPeak.toFixed(1)} ساعة
                </div>
            </div>
            
            <div class="result-card">
                <div class="result-icon">💉</div>
                <div class="result-title">توصية الأنسولين</div>
                <div class="result-value">${predictions.totalInsulinDose}</div>
                <div class="result-unit">وحدة</div>
                <div class="result-description">
                    تغطية كربوهيدرات: ${predictions.carbCoverage} وحدة<br>
                    تصحيح: ${predictions.correction} وحدة
                </div>
            </div>
            
            <div class="result-card">
                <div class="result-icon">🍽️</div>
                <div class="result-title">ملخص الوجبة</div>
                <div class="result-value">${predictions.totalCarbs}</div>
                <div class="result-unit">غرام كربوهيدرات</div>
                <div class="result-description">
                    إجمالي السعرات: ${predictions.totalCalories}
                </div>
            </div>
        </div>
        
        <div class="chart-container" style="position: relative; height: 300px;">
            <canvas id="bgChart"></canvas>
        </div>
        
        <div class="recommendations-section">
            <h3>التوصيات الصحية</h3>
            ${predictions.recommendations.map(rec => `
                <div class="recommendation-item">
                    <div class="recommendation-type">${rec.type}</div>
                    <div class="recommendation-text">${rec.text}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    resultsContainer.innerHTML = resultsHtml;
    
    // إنشاء الرسم البياني
    setTimeout(() => createChart(predictions), 100);
}

function createChart(predictions) {
    const chartCanvas = document.getElementById('bgChart');
    if (!chartCanvas) return;
    
    const ctx = chartCanvas.getContext('2d');
    
    if (chart) {
        chart.destroy();
    }
    
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: predictions.timePoints,
            datasets: [{
                label: 'سكر الدم المتوقع',
                data: predictions.bgValues,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#1FB8CD',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'التوقع الزمني لسكر الدم',
                    font: { size: 16, weight: 'bold' },
                    color: '#1d7483'
                },
                legend: { display: false }
            },
            scales: {
                x: { title: { display: true, text: 'الوقت' } },
                y: {
                    title: { display: true, text: 'سكر الدم (ملغ/ديسيلتر)' },
                    min: 60,
                    max: Math.max(300, Math.max(...predictions.bgValues) + 20)
                }
            }
        }
    });
}

function startOverFunc() {
    resetApp();
    navigateToStep(1);
}

function resetApp() {
    currentStep = 1;
    currentMeal = [];
    
    // إعادة تعيين النماذج
    const inputs = ['age', 'weight', 'height', 'currentBG'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = '';
    });
    
    const selects = ['diabetesType', 'timeSinceLastMeal', 'foodCategory', 'foodSearch'];
    selects.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = element.selectedIndex = 0;
    });
    
    const quantity = document.getElementById('quantity');
    if (quantity) quantity.value = '1';
    
    // إعادة تعيين العروض
    const bmiValue = document.getElementById('bmiValue');
    if (bmiValue) bmiValue.textContent = '--';
    
    updateMealDisplay();
    updateFoodPreview();
    
    if (chart) {
        chart.destroy();
        chart = null;
    }
}

// وظائف مساعدة
function getGICategory(gi) {
    if (gi < 55) return 'منخفض';
    if (gi <= 70) return 'متوسط';
    return 'عالي';
}

// إتاحة الوظائف للنافذة العامة
window.removeFoodFromMeal = removeFoodFromMeal;