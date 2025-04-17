// Define mock class mappings for each school + major combo
const plans = {
  "GMU_CS": [
    "CSC 201 - Computer Science I",
    "MTH 263 - Calculus I",
    "ENG 111 - College Composition I"
  ],
  "UVA_CS": [
    "CSC 201 - Computer Science I",
    "MTH 263 - Calculus I",
    "PHY 241 - University Physics I"
  ],
  "VT_CS": [
    "CSC 201 - Computer Science I",
    "MTH 263 - Calculus I",
    "CHM 111 - General Chemistry I"
  ],
  "GMU_Nursing": [
    "BIO 141 - Human Anatomy and Physiology I",
    "PSY 200 - Principles of Psychology",
    "ENG 111 - College Composition I"
  ],
  "UVA_Nursing": [
    "BIO 141 - Human Anatomy and Physiology I",
    "SOC 200 - Introduction to Sociology",
    "CHM 111 - General Chemistry I"
  ],
  "VT_Nursing": [
    "BIO 141 - Human Anatomy and Physiology I",
    "MTH 154 - Quantitative Reasoning",
    "ENG 111 - College Composition I"
  ]
};

function showPlan() {
  const uni = document.getElementById("university").value;
  const major = document.getElementById("major").value;
  const key = `${uni}_${major}`;
  const output = document.getElementById("plan-output");

  if (!uni || !major) {
    output.innerHTML = `<p style="color: red;">Please select both a university and a major.</p>`;
    return;
  }

  if (plans[key]) {
    const classList = plans[key].map(c => `<li>${c}</li>`).join("");
    output.innerHTML = `
      <h3>Recommended NOVA Courses for ${major} at ${getUniversityName(uni)}:</h3>
      <ul>${classList}</ul>
    `;
  } else {
    output.innerHTML = `<p style="color: red;">Sorry, no academic plan available for that combination (yet!).</p>`;
  }
}

function getUniversityName(code) {
  const map = {
    GMU: "George Mason University",
    UVA: "University of Virginia",
    VT: "Virginia Tech"
  };
  return map[code] || code;
}
