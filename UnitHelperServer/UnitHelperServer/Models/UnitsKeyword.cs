namespace UnitHelperServer.Models
{
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

        public virtual Keyword Keyword { get; set; }

        public virtual Unit Unit { get; set; }
    }
}
