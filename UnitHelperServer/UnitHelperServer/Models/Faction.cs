namespace UnitHelperServer.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Faction
    {
        public Faction()
        {
            Keywords = new List<Keyword>();
            Units = new List<Unit>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [Required]
        [StringLength(32)]
        public string Name { get; set; }

        [Required]
        [StringLength(8)]
        public string Metagroup { get; set; }
        public bool Approved { get; set; }
        public virtual List<Keyword> Keywords { get; set; }
        public virtual List<Unit> Units { get; set; }
    }
}
