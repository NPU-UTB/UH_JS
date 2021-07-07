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
using System.Web.Http.Cors;
using System.Web.Http.Description;
using UnitHelperServer.Models;

namespace UnitHelperServer.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class KeywordsController : ApiController
    {
        private UnitHelperContext db;

        public KeywordsController(UnitHelperContext _db)
        {
            db = _db;
        }

        // GET: api/Keywords
        [HttpGet]
        public IQueryable<Keyword> GetKeywords()
        {
            return db.Keywords;
        }

        // GET: api/Keywords/5
        [ResponseType(typeof(Keyword))]
        [HttpGet]
        public async Task<IHttpActionResult> GetKeyword(int id)
        {
            Keyword keyword = await db.Keywords.FindAsync(id);
            if (keyword == null)
            {
                return NotFound();
            }

            return Ok(keyword);
        }

        // PUT: api/Keywords/5
        [ResponseType(typeof(void))]
        [HttpPut]
        public async Task<IHttpActionResult> PutKeyword(int id, Keyword keyword)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != keyword.Id)
            {
                return BadRequest();
            }

            db.Entry(keyword).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KeywordExists(id))
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

        // POST: api/Keywords
        [ResponseType(typeof(Keyword))]
        [HttpPost]
        public async Task<IHttpActionResult> PostKeyword(Keyword keyword)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Keywords.Add(keyword);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (KeywordExists(keyword.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = keyword.Id }, keyword);
        }

        // DELETE: api/Keywords/5
        [ResponseType(typeof(Keyword))]
        [HttpDelete]
        public async Task<IHttpActionResult> DeleteKeyword(int id)
        {
            Keyword keyword = await db.Keywords.FindAsync(id);
            if (keyword == null)
            {
                return NotFound();
            }

            db.Keywords.Remove(keyword);
            await db.SaveChangesAsync();

            return Ok(keyword);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool KeywordExists(int id)
        {
            return db.Keywords.Count(e => e.Id == id) > 0;
        }
    }
}