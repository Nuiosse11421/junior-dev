interface CupProps {
    guest: number;
}

function Cup({ guest }: CupProps) {
    return <h2>Tea cup for guest #{guest}</h2>
}

export default function TeaGathering() {
    let cups = [];//ที่ใช้ Let เพราะว่าตัวแปล cups มีการเปลี่ยนแปลงตลอดเวลา
    for (let i = 1; i <= 12; i++) {
        cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
}

/*ในส่วนของ Code นี้ที่แตกต่างจาก purity ที่อาจจะมีการเปลี่ยนแปลงตัวแปร
    ที่เราไม่สามารถควบตุมได้
*/