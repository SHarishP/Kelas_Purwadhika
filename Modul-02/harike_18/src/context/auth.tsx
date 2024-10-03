import React, { useState, createContext} from "react";

/* 
    useContext digunakan untuk global state, yang mana dapat digunakan pada childrennya tanpa harus membuat prop lagi
    Tetapi kita harus menggunakan createContext
*/

interface IAuth {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<IAuth | null>(null);

function Auth({ children }: { children: JSX.Element}) {
    // Jika kita menghover 'App' pada main.tsx, dia mempunyai tipe data JSX.Element
    const [isLogin, setIsLogin] = useState<boolean>(false);

    return (
        <AuthContext.Provider value = {{ isLogin, setIsLogin }}>
            {children}
        </AuthContext.Provider>
    );
}

export {Auth, AuthContext};

/* 
    auth.tsx merupakan Higher Order Function (HOC), dimana dia membungkus suatu children 

    Komponen 'Auth' dipanggil di dalam file main.tsx

    Dan disini, children dari Auth adalah 'App' (Cek main.tsx)
*/

/* 
    .Provider dibutuhkan supaya createContext dapat digunakan oleh childrennya
*/