## State Management

Saya memilih menggunakan Context API untuk state management pada project ini karena:
- Sudah terintegrasi: Context API sudah tersedia di react jadi tidak memerluka library lain.
- Sederhana: Context API cocok untuk project yang ringan seperti todo list.
- Efisien: Context API dapat menyimpan dan mengelola data yang dapat diakses dari berbagai komponen tanpa menggunakan props.

## Implementasi Context API

- TodoContext: Saya membuat TodoContext untuk menyimpan state seperti daftar tugas dan filter tugas.
- useTodo Hook: Dibuat hook useTodo untuk memudahkan pengaksesan state dan fungsi-fungsi pengelolaan tugas seperti addTodo, toggleTodo, deleteTodo, dan setFilter.
- Provider: Semua komponen project yang membutuhkan akses state dibungkus oleh TodoProvider, sehingga state dapat diakses di komponen manapun tanpa perlu diteruskan melalui props.