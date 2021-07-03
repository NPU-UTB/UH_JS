namespace UnitHelperServer.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Keyword
    {
        public Keyword()
        {
            UnitsKeywords = new List<UnitsKeyword>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [Required]
        [StringLength(48)]
        public string Text { get; set; }

        public int FactionId { get; set; }

        public bool Approved { get; set; }

        public virtual Faction Faction { get; set; }

        public virtual List<UnitsKeyword> UnitsKeywords { get; set; }
    }
}
