import { useEffect, useState } from "react";

export default function FetchData() {
    const [users, setUser] = useState([]);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setUser(data);
                    setLoad(false);
                })
                .catch(err => {
                    setError(err.message);
                    setLoad(false);
                });
        }, 3000);
    }, []);

    if (load) return <p>Đang tải dữ liệu...</p>;
    if (error) return <p>Lỗi: {error}</p>;
    return (
        <>
            <div>
                <h2>Danh sách người dùng</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))}
                </ul>
            </div>
        </>
    );
  }
  