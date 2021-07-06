using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using UnitHelperServer.Models;

namespace UnitHelperServer.Controllers
{
    public class FactionsController : ApiController
    {
        private UnitHelperContext db;

        public FactionsController(UnitHelperContext _db)
        {
            db = _db;
        }

        // GET: api/Factions
        [HttpGet]
        public IQueryable<Faction> GetFactions()
        {
            return db.Factions;
        }

        // GET: api/Factions/5
        [ResponseType(typeof(Faction))]
        [HttpGet]
        public async Task<IHttpActionResult> GetFaction(int id)
        {
            Faction faction = await db.Factions.FindAsync(id);
            if (faction == null)
            {
                return NotFound();
            }

            return Ok(faction);
        }

        // PUT: api/Factions/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutFaction(int id, Faction faction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != faction.Id)
            {
                return BadRequest();
            }

            db.Entry(faction).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FactionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Factions
        [ResponseType(typeof(Faction))]
        public async Task<IHttpActionResult> PostFaction(Faction faction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Factions.Add(faction);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (FactionExists(faction.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = faction.Id }, faction);
        }

        // DELETE: api/Factions/5
        [ResponseType(typeof(Faction))]
        public async Task<IHttpActionResult> DeleteFaction(int id)
        {
            Faction faction = await db.Factions.FindAsync(id);
            if (faction == null)
            {
                return NotFound();
            }

            db.Factions.Remove(faction);
            await db.SaveChangesAsync();

            return Ok(faction);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FactionExists(int id)
        {
            return db.Factions.Count(e => e.Id == id) > 0;
        }
    }
}