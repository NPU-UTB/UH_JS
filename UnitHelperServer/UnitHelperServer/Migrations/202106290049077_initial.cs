namespace UnitHelperServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Factions",
                c => new
                    {
                        Id = c.Int(nullable: false),
                        Name = c.String(nullable: false, maxLength: 32, unicode: false),
                        Metagroup = c.String(nullable: false, maxLength: 8, unicode: false),
                        Approved = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Keywords",
                c => new
                    {
                        Id = c.Int(nullable: false),
                        Text = c.String(nullable: false, maxLength: 48, unicode: false),
                        FactionId = c.Int(nullable: false),
                        Approved = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Factions", t => t.FactionId)
                .Index(t => t.FactionId);
            
            CreateTable(
                "dbo.UnitsKeywords",
                c => new
                    {
                        Id = c.Int(nullable: false),
                        UnitId = c.Int(nullable: false),
                        KeywordId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Units", t => t.UnitId)
                .ForeignKey("dbo.Keywords", t => t.KeywordId)
                .Index(t => t.UnitId)
                .Index(t => t.KeywordId);
            
            CreateTable(
                "dbo.Units",
                c => new
                    {
                        Id = c.Int(nullable: false),
                        Name = c.String(nullable: false, maxLength: 48, unicode: false),
                        FactionId = c.Int(nullable: false),
                        Approved = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Factions", t => t.FactionId)
                .Index(t => t.FactionId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Units", "FactionId", "dbo.Factions");
            DropForeignKey("dbo.Keywords", "FactionId", "dbo.Factions");
            DropForeignKey("dbo.UnitsKeywords", "KeywordId", "dbo.Keywords");
            DropForeignKey("dbo.UnitsKeywords", "UnitId", "dbo.Units");
            DropIndex("dbo.Units", new[] { "FactionId" });
            DropIndex("dbo.UnitsKeywords", new[] { "KeywordId" });
            DropIndex("dbo.UnitsKeywords", new[] { "UnitId" });
            DropIndex("dbo.Keywords", new[] { "FactionId" });
            DropTable("dbo.Units");
            DropTable("dbo.UnitsKeywords");
            DropTable("dbo.Keywords");
            DropTable("dbo.Factions");
        }
    }
}
