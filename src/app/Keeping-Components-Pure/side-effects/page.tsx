let guest = 0;

function Cup() {
    guest = guest + 1
    return <h2>tea cup for guest #{guest}</h2>
}

export default function TesSet() {
    return (
        <>
            <Cup />
            <Cup />
            <Cup />
        </>
    )
}

//ในส่วนนี้การคำนวณอาจจะมีความผิดพลาดเกิดขึ้นได้เราสามารถใช้แบบเมนนวลได้้เช่น

/*
interface CupProps{
    guest: number;
}
function Cup({ guest }:CupProps) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
*/