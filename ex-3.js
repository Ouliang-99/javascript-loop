// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
// กำหนดค่าต่ำสุดเริ่มต้นเป็นค่าแรกใน array
let minScore = scores[0]
// Start coding here
// ใช้ loop for เพื่อตรวจสอบแต่ละค่าใน array
for (let i=0; i < scores.length;i++) {
    if (scores[i] < minScore) {
         // หากพบค่าที่น้อยกว่าค่าต่ำสุดที่เก็บไว้ ให้ปรับค่า
        minScore = scores[i]
    }
}

console.log(minScore);
