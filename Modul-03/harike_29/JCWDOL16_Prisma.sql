create database jcwdol16_prisma;

use jcwdol16_prisma;

show tables;

select * from branch;

select * from manager;

-- Memasukkan data ke dalam tabel expense
insert into manager(name, branchId)
value("Budi", 1);

delete from branch where id = 1;