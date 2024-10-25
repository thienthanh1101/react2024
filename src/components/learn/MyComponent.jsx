import './stype.css'

//()=>{}
// component=html + css + javaScript
//Jsx--> dịch htlm
//fragment --> cho làm nhiều div <></>
const MyComponent = () => {
    return (
        <>
            <div>huynv & nguyen</div>
            <div className="child" style={{ borderRadius: "10px" }}>Childrent</div>
        </>
    );

}
export default MyComponent;