use sakila;

select * from customer;

select * from address where address_id = 5;

--  Join Class untuk menggabungkan 2 table atau lebih
-- Contoh untuk menampilkan first_name, last_name, address, dan district dari customer
select cust.first_name, cust.last_name, addr.address, addr.district  
from customer cust 
	inner join address addr on cust.address_id = addr.address_id
where cust.customer_id = 2;
--  cust ini adalah sebuah alias, apabila ada field yang sama, lebih baik langsung diberi alias, meskipun tidak ada field yang sama
--  addr juga merupakan sebuah alias

select cust.first_name, cust.last_name, addr.address, addr.district  
from customer cust 
	left join address addr on cust.address_id = addr.address_id
where cust.customer_id = 1;

select cust.first_name, cust.last_name, addr.address, addr.district  
from customer cust 
	right join address addr on cust.address_id = addr.address_id
where cust.customer_id = 5;

select cust.first_name, cust.last_name, addr.address, addr.district  
from address addr 
	right join customer cust on cust.address_id = addr.address_id
where cust.customer_id = 5;

select cust.first_name, cust.last_name, addr.address, addr.district  
from customer cust 
	cross join address addr;
    
-- Pembahasan One to Many
select * from customer;
select * from payment;

select * 
from customer cust join payment pay on pay.customer_id = cust.customer_id
where cust.customer_id = 1;

-- Relation Many to Many
select * from actor;
select * from film_actor;
select * from film;

select act.first_name, act.last_name, fil.title 
	from actor act
    inner join film_actor fa on fa.actor_id = act.actor_id
	inner join film fil on fil.film_id = fa.film_id
where fil.film_id = 1;

	



