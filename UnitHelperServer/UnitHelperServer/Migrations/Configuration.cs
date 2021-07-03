namespace UnitHelperServer.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Data.Entity.Validation;
    using System.Linq;
    using UnitHelperServer.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<UnitHelperServer.Models.UnitHelperContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(UnitHelperServer.Models.UnitHelperContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            /*
            var factions = new List<Faction> 
            {
                new Faction{ Id = 0, Name = "Any", Metagroup = "", Approved = true},
                new Faction{ Id = 1, Name = "Adeptus Astartes", Metagroup = "Imperium", Approved = true},
                new Faction{ Id = 2, Name = "Necrons", Metagroup = "Xenos", Approved = true},
                new Faction{ Id = 3, Name = "Death Guard", Metagroup = "Chaos", Approved = false}
            };
            factions.ForEach(f => context.Factions.AddOrUpdate(p => p.Name, f));
            try
            {
                context.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {
                foreach (var eve in e.EntityValidationErrors)
                {
                    Console.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                        eve.Entry.Entity.GetType().Name, eve.Entry.State);
                    foreach (var ve in eve.ValidationErrors)
                    {
                        Console.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
                            ve.PropertyName, ve.ErrorMessage);
                    }
                }
                throw;
            }
            */
        }
    }
}
