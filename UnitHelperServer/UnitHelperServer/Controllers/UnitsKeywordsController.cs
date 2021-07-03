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
    public class UnitsKeywordsController : ApiController
    {
        private UnitHelperContext db;

        public UnitsKeywordsController(UnitHelperContext _db)
        {
            db = _db;
        }

        // GET: api/UnitsKeywords
        public IQueryable<UnitsKeyword> GetUnitsKeywords()
        {
            return db.UnitsKeywords;
        }

        // GET: api/UnitsKeywords/5
        [ResponseType(typeof(UnitsKeyword))]
        public async Task<IHttpActionResult> GetUnitsKeyword(int id)
        {
            UnitsKeyword unitsKeyword = await db.UnitsKeywords.FindAsync(id);
            if (unitsKeyword == null)
            {
                return NotFound();
            }

            return Ok(unitsKeyword);
        }

        // PUT: api/UnitsKeywords/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUnitsKeyword(int id, UnitsKeyword unitsKeyword)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != unitsKeyword.Id)
            {
                return BadRequest();
            }

            db.Entry(unitsKeyword).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UnitsKeywordExists(id))
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

        // POST: api/UnitsKeywords
        [ResponseType(typeof(UnitsKeyword))]
        public async Task<IHttpActionResult> PostUnitsKeyword(UnitsKeyword unitsKeyword)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UnitsKeywords.Add(unitsKeyword);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UnitsKeywordExists(unitsKeyword.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = unitsKeyword.Id }, unitsKeyword);
        }

        // DELETE: api/UnitsKeywords/5
        [ResponseType(typeof(UnitsKeyword))]
        public async Task<IHttpActionResult> DeleteUnitsKeyword(int id)
        {
            UnitsKeyword unitsKeyword = await db.UnitsKeywords.FindAsync(id);
            if (unitsKeyword == null)
            {
                return NotFound();
            }

            db.UnitsKeywords.Remove(unitsKeyword);
            await db.SaveChangesAsync();

            return Ok(unitsKeyword);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UnitsKeywordExists(int id)
        {
            return db.UnitsKeywords.Count(e => e.Id == id) > 0;
        }
    }
}