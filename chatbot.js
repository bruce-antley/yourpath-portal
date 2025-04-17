// Based on official NOVA program catalogs

const plans = {
  "GMU_CS": [
    "CSC 200 - Introduction to Computer Science",
    "CSC 201 - Computer Science I",
    "MTH 263 - Calculus I",
    "ENG 111 - College Composition I",
    "PHY 241 - University Physics I",
    "SDV 100 - College Success Skills"
  ],
  "UVA_CS": [
    "CSC 200 - Introduction to Computer Science",
    "CSC 201 - Computer Science I",
    "MTH 263 - Calculus I",
    "MTH 264 - Calculus II",
    "PHY 241 - University Physics I",
    "ENG 111 - College Composition I"
  ],
  "VT_CS": [
    "CSC 200 - Introduction to Computer Science",
    "CSC 201 - Computer Science I",
    "CSC 202 - Computer Science II",
    "MTH 263 - Calculus I",
    "MTH 264 - Calculus II",
    "ENG 111 - College Composition I"
  ],
  "GMU_Nursing": [
    "BIO 141 - Human Anatomy and Physiology I",
    "BIO 142 - Human Anatomy and Physiology II",
    "BIO 150 - Microbiology",
    "ENG 111 - College Composition I",
    "PSY 200 - Principles of Psychology",
    "SDV 101 - Orientation to Health Professions"
  ],
  "UVA_Nursing": [
    "BIO 141 - Human Anatomy and Physiology I",
    "BIO 142 - Human Anatomy and Physiology II",
    "BIO 150 - Microbiology",
    "ENG 111 - College Composition I",
    "SOC 200 - Introduction to Sociology",
    "SDV 101 - Orientation to Health Professions"
  ],
  "VT_Nursing": [
    "BIO 141 - Human Anatomy and Physiology I",
    "BIO 142 - Human Anatomy and Physiology II",
    "BIO 150 - Microbiology",
    "ENG 111 - College Composition I",
    "MTH 154 - Quantitative Reasoning",
    "SDV 101 - Orientation to Health Professions"
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
    const classList = plans[key].map(course => `<li>${course}</li>`).join("");
    output.innerHTML = `
      <h3>Recommended NOVA Courses for <em>${getMajorName(major)}</em> at <em>${getUniversityName(uni)}</em>:</h3>
      <ul>${classList}</ul>
      <p style="margin-top: 10px;">
        These recommendations are based on <a href="https://catalog.nvcc.edu/preview_program.php?catoid=15&poid=${major === 'CS' ? '3735' : '3691'}" target="_blank">NOVA's official ${getMajorName(major)} curriculum</a>.
      </p>
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

function getMajorName(code) {
  const map = {
    CS: "Computer Science",
    Nursing: "Nursing"
  };
  return map[code] || code;
}
