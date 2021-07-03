namespace UnitHelperServer.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class UnitsKeyword
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int UnitId { get; set; }

        public int KeywordId { get; set; }
        [JsonIgnore]
        public virtual Keyword Keyword { get; set; }
        [JsonIgnore]
        public virtual Unit Unit { get; set; }
    }
}
