using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace UnitHelperServer.Models
{
    public partial class UnitHelperContext : DbContext
    {
        public UnitHelperContext()
            : base("name=UnitHelperDb")
        {
        }

        public virtual DbSet<Faction> Factions { get; set; }
        public virtual DbSet<Keyword> Keywords { get; set; }
        public virtual DbSet<Unit> Units { get; set; }
        public virtual DbSet<UnitsKeyword> UnitsKeywords { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Faction>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<Faction>()
                .Property(e => e.Metagroup)
                .IsUnicode(false);

            modelBuilder.Entity<Faction>()
                .HasMany(e => e.Units)
                .WithRequired(e => e.Faction)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Keyword>()
                .Property(e => e.Text)
                .IsUnicode(false);

            modelBuilder.Entity<Keyword>()
                .HasMany(e => e.UnitsKeywords)
                .WithRequired(e => e.Keyword)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Unit>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<Unit>()
                .HasMany(e => e.UnitsKeywords)
                .WithRequired(e => e.Unit)
                .WillCascadeOnDelete(false);
        }
    }
}
