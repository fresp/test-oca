

#### Cara Menjalankan:

- install semua module terlebih dahulu dengan mengetikan `npm install ` atau `yarn add`

- untuk menjalankannya silahkan ketikan `npm run dev` atau `yarn run dev`

#### Endpoint Route:

| Name  | Endpoint Route |
| ------------- | ------------- |
| Checkin Parkir  |  http://localhost:3000/mhs/create  |
| Checkout Parkir |   http://localhost:4004/parkir/checkout  |
| Lihat Jumlah parkir |   http://localhost:4004/parkir/results?tipe=SUV&warna=Hitam |

#### Struktur Folder:

+ app
 + controllers
 + helpers
 + libs
 + middlewares
 +  models
 + routes
 + views
+ configs
+ core
+ public

#### Penjelasan Strukture Folder:

- **app** tempat yang berisi untuk menyimpan, semua fungsi  dari aplikasi yang nantinya akan kita buat

- **controller** tempat yang berisi semua logic dari aplikasi tersebut seperti untuk membuat tambah data mahasiswa, hapus data mahasiswa dll

- **helper** tempat yang berisi sebuah fungsi penolong sebagai utility untuk digunakan seperti **custome message, custome email template** dll

- **libs** tempat yang berisi untuk customisasi library  yang telah kita install seperti **jwt, bcrypt** yang nantinya bisa kita custom menjadi sebuah fungsi tersendiri untuk digunakan

- **middleware** tempat yang berisi  untuk custome function middleware yang digunakan untuk keperluan **auth jwt, auth role** dll

- **model** tempat yang berisi  untuk fungsi handle data yang nantinya digunakan oleh **controller** sebagai bagian dari logic aplikasi itu sendiri

- **route** tempat yang berisi untuk pembuatan routing pada aplikasi untuk meneruskan fungsi dari **controller ke view**

- **config** tempat yang berisi untuk pembuatan konfigurasi dari **database** atau yang lainnya

- **core** tempat pengendali atau inti dari aplikasi dari **model**, **controller**, **route** dan **view**

