/*ใน่ส่วนของ const คือการสร้าง Object ขึ้นมาเพื่อใช้ในอนาคต
 และทำไม่ต้องใช้งาน const เพราะ Object นี้เมื่อตั้งค่าข้อมูลแล้ว จะไม่มีการเปลี่ยนแปลง*/
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
    },
};

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    )
}
