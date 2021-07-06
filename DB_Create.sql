Create database UnitHelperDb;
Use UnitHelperDb;
--Use master;
--Drop database UnitHelperDb;

Create table Factions(
Id int Primary Key,
Name varchar(32) not null,
Metagroup varchar(8) not null,
Approved bit not null);


Insert into Factions values (0, 'Any', '', 1);
Insert into Factions values (1, 'Adeptus Astartes', 'Imperium', 1);
Insert into Factions values (2, 'Necrons', 'Xenos', 1);
Insert into Factions values (3, 'Death Guard', 'Chaos', 0);


--Units
Create table Units(
Id int Primary Key,
Name varchar(48) not null,
FactionId int not null,
Approved bit not null);

Insert into Units(Id, Name, FactionId, Approved) values (1, 'Tactical Squad', 1, 1);
Insert into Units(Id, Name, FactionId, Approved) values (2, 'Assault Squad', 1, 1);
Insert into Units(Id, Name, FactionId, Approved) values (3, 'Devastator Squad', 1, 1);
Insert into Units(Id, Name, FactionId, Approved) values (4, 'Scout Squad', 1, 1);

Insert into Units(Id, Name, FactionId, Approved) values (5, 'Necron Warriors', 2, 1);
Insert into Units(Id, Name, FactionId, Approved) values (6, 'Immortals', 2, 1);
Insert into Units(Id, Name, FactionId, Approved) values (7, 'Tomb Blades', 2, 1);
Insert into Units(Id, Name, FactionId, Approved) values (8, 'Canoptek Scarab Swarm', 2, 1);

Insert into Units(Id, Name, FactionId, Approved) values (9, 'Poxwalkers', 3, 0);
Insert into Units(Id, Name, FactionId, Approved) values (10, 'Plague Marines', 3, 0);

--Keywords
Create table Keywords(
Id int Primary Key,
Text varchar(48) not null,
FactionId int not null,
Approved bit not null);

Insert into Keywords values (1, 'Core', 0, 1);
Insert into Keywords values (2, 'Infantry', 0, 1);
Insert into Keywords values (3, 'Biker', 0, 1);
Insert into Keywords values (4, 'Fly', 0, 1);
Insert into Keywords values (5, 'Swarm', 0, 1);
Insert into Keywords values (6, 'Scout', 1, 1);
Insert into Keywords values (7, 'Smokescreen', 1, 1);
Insert into Keywords values (8, 'Melta Bombs', 1, 1);
Insert into Keywords values (9, 'Canoptek', 2, 1);
Insert into Keywords values (10, 'Bubonic Astartes', 3, 0);
Insert into Keywords values (11, 'Gauss', 2, 1);
Insert into Keywords values (12, 'Tesla', 2, 1);

-- Units-Keywords
Create table UnitsKeywords(
Id int Primary Key,
UnitId int not null,
KeywordId int not null);

Insert into UnitsKeywords values (1, 1, 1);
Insert into UnitsKeywords values (2, 1, 2);
Insert into UnitsKeywords values (3, 1, 8);

Insert into UnitsKeywords values (4, 2, 1);
Insert into UnitsKeywords values (5, 2, 2);
Insert into UnitsKeywords values (6, 2, 8);

Insert into UnitsKeywords values (7, 3, 1);
Insert into UnitsKeywords values (8, 3, 2);

Insert into UnitsKeywords values (9, 4, 1);
Insert into UnitsKeywords values (10, 4, 2);
Insert into UnitsKeywords values (11, 4, 6);
Insert into UnitsKeywords values (12, 4, 7);

Insert into UnitsKeywords values (13, 5, 1);
Insert into UnitsKeywords values (14, 5, 2);
Insert into UnitsKeywords values (15, 5, 11);

Insert into UnitsKeywords values (16, 6, 1);
Insert into UnitsKeywords values (17, 6, 2);
Insert into UnitsKeywords values (18, 6, 11);
Insert into UnitsKeywords values (19, 6, 12);

Insert into UnitsKeywords values (20, 7, 1);
Insert into UnitsKeywords values (21, 7, 3);
Insert into UnitsKeywords values (22, 7, 4);

Insert into UnitsKeywords values (23, 8, 4);
Insert into UnitsKeywords values (24, 8, 5);
Insert into UnitsKeywords values (25, 8, 9);

Insert into UnitsKeywords values (26, 9, 2);

Insert into UnitsKeywords values (27, 10, 1);
Insert into UnitsKeywords values (28, 10, 2);
Insert into UnitsKeywords values (29, 10, 10);

--Foreign Keys
Alter table Units add constraint FK_Unit_Faction Foreign Key(FactionId) references Factions(Id);
Alter table Keywords add constraint FK_KW_Faction Foreign Key(FactionId) references Factions(Id);

Alter table UnitsKeywords add constraint FK_UK_Unit Foreign Key(UnitId) references Units(Id);
Alter table UnitsKeywords add constraint FK_UK_KW Foreign Key(KeywordId) references Keywords(Id);

--Drop

Alter table Units drop constraint FK_Unit_Faction;
Alter table Keywords drop constraint FK_KW_Faction;

Alter table UnitsKeywords drop constraint FK_UK_Unit;
Alter table UnitsKeywords drop constraint FK_UK_KW;

Delete from Factions;
Delete from Units;
Delete from Keywords;
Delete from UnitsKeywords;

Drop table Factions;
Drop table Units;
Drop table Keywords;
Drop table UnitsKeywords;
