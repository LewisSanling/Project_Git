
const Birth = ({ newUser, setNewUser }) => {

    // ===== ===== ===== ===== ===== ===== ===== ===== =====
    // ===== ===== ===== ===== ===== ===== ===== ===== =====
    // ===== ===== ===== ===== ===== ===== ===== ===== =====

    const ohandleChange = (e) => {
        setNewUser({ ...newUser, birth: e.target.value });
    }

    // ===== ===== ===== ===== ===== ===== ===== ===== =====
    // ===== ===== ===== ===== ===== ===== ===== ===== =====
    // ===== ===== ===== ===== ===== ===== ===== ===== =====

    return (
        <div className="birth">
            <span>생년월일 : </span>
            <input type="date" onChange={ohandleChange} />
        </div>
    );
}

export default Birth;