function LocalStorage() {
    // const user = localStorage.getItem("user"); Di comment karena kita akan mengakses data dari Parent / app.tsx
    return (
        <div>
            <div>
                {/* Menambahkan data */}
                <button onClick={() => localStorage.setItem("user", "ini data")}>Add Local Storage</button>

                {/* Menghapus data  */}
                <button onClick={() => localStorage.removeItem("user")}>Remove Local Storage</button>
            </div>
        </div>
    );
}

export default LocalStorage;

/* 
    Karena Local Storage disimpan di dalam browser kita, maka kita perlu menggunakan method '.getItem' untuk mengambil data dari local 
    storage kita berdasarkan key nya. Dalam Case ini key nya adalah "user", key ditambahkan oleh kita
*/

/* 
    Maksud dari :
    <button onClick={() => localStorage.setItem("user", "ini data")}>Add Local Storage</button>
    Ketika button di klik, button akan menyimpan data pada local storage
*/