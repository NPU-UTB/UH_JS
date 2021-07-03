namespace UnitHelperServer.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Unit
    {
        public Unit()
        {
            UnitsKeywords = new List<UnitsKeyword>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [Required]
        [StringLength(48)]
        public string Name { get; set; }

        public int FactionId { get; set; }

        public bool Approved { get; set; }
        [JsonIgnore]
        public virtual Faction Faction { get; set; }
        [JsonIgnore]
        public virtual List<UnitsKeyword> UnitsKeywords { get; set; }
    }
}
