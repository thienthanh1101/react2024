import { Button, Input } from "antd";
function UserForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const handleClickBtn = () => {
        console.log(">>> check state: ", { fullName, email, password, phone });
    };
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>FullName</span>
                    <Input />
                </div>
                <div>
                    <span>Email</span>
                    <Input />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input />
                </div>
                <div>
                    <Button
                        // onClick={() => handleClickBtn()}
                        onClick={handleClickBtn}
                        type="primary"> Create User </Button>
                </div>
            </div>
        </div>
    );
}
export default UserForm;