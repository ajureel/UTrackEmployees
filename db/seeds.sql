
INSERT INTO department (name)
VALUES
  ('HR'),
  ('Ops'),
  ('Tech'),
  ('C-Level'),
  ('Owner')
;

INSERT INTO role (title, salary, salary_type, department_id)
VALUES
  ('HR VP', 150000.00, "salary", 1),
  ('HR Mgr', '85000', "salary", 1),
  ('HR Grunt', '25.50', "hourly", 1),
  ('OPS VP', 100000.00, "salary", 2),
  ('OPS Mgr', '65000', "salary", 2),
  ('OPS Grunt', '20.50', "hourly", 2),
  ('Tech VP', 190000.00, "salary", 3),
  ('Tech Mgr', '100000', "salary", 3),
  ('Tech Grunt', '65000', "salary", 3),
  ('CEO', 999999, "salary",4)
;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
   ('Joe', 'Cool', 10, null),
   ('Henry', 'VanWinkle', 1, 1),
   ('Harper', 'McRelation', 2, 2),
   ('Hope', 'Grows', 3, 3),
   ('Hershy', 'Hicks', 3, 3),
   ('Ophelia', 'Hamlet', 4, 1),
   ('Omer', 'Micheals', 5, 6),
   ('Olie', 'GetsItDone', 6, 7),
   ('Ohm', 'GQ', 6, 7),
   ('Tina', 'Rocks', 7, 1),
   ('Timothy', 'Manly', 8, 10),
   ('Tony', 'Grunts', 9, 11),
   ('Tara', 'Goodly', 9, 11)   
;

-- select * from role r join department d on d.id=r.department_id;

-- select e.*, r.title, r.salary, r.salary_type, CONCAT( mgr.first_name, " ", mgr.last_name) as manager, d.name
-- from employee e join role r on e.role_id = r.id join employee mgr on e.manager_id = mgr.id join department d on r.department_id = d.id;