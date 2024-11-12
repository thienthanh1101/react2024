import './stype.css'

//()=>{}
// component=html + css + javaScript
//Jsx--> dịch htlm
//fragment --> cho làm nhiều div <></>
// Không in ra biết dạng boolean (true or false),null, undefined
// dùng dấu - sẽ báo lỗi
//{tượng trưng có htlm{object}}
const MyComponent = () => {
    const varadd = " sinh nam "
    const varAddNum = 1975
    // const hoidanit = true; //boolean
    // const hoidanit = undefined;
    // const hoidanit = null;
    const varAddArray = [1, 2, 3]
    const huynv = {
        name: " huynv",
        age: 50
    }

    return (
        <>
            <div>{huynv.name} & nguyen{varadd}{varAddNum} age: {huynv.age}</div>
            <div>{JSON.stringify(varAddArray)} {JSON.stringify(huynv)}</div>
            <div>{console.log("I'm Huy chèn javascript")}</div>
            <div className="child" style={{ borderRadius: "10px" }}>Childrent</div>
        </>
    );

}
export default MyComponent;