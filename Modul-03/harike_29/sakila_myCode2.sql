use sakila;

select * from customer;
select * from rental where rental_id = 16050;
select * from rental order by rental_id asc;
select * from payment order by rental_id desc; 
select * from payment where rental_id = 16049;

--  Transaksi adalah serangkaian operasi yang dieksekusi sebagai satu kesatuan, sehingga perubahan data tidak akan diterapkan ke database sampai semua operasi di dalam transaksi tersebut berhasil dijalankan.
start transaction;

select @rentalID=max(rental_id) from rental;

insert into rental(rental_date, inventory_id, customer_id, return_date, staff_id, last_update)
value(now(),367, 3, now(), 1, now());

insert into payment(customer_id, staff_id, rental_id, amount, payment_date, last_update)
values(3, 1, @rentalID, 2.99, now(), now());

commit;

rollback;