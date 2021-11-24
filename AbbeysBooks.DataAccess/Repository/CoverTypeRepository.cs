using AbbeysBooks.DataAccess.Repository.IRepository;
using AbbeysBooks.Models;
using AbbeysBookStore.DataAccess.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbbeysBooks.DataAccess.Repository
{
    public class CoverTypeRepository : Repository<CoverType>, ICoverTypeRepository
    {
        private readonly ApplicationDbContext _db;
        public CoverTypeRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }
        public void Update(CoverType coverType)
        {
            //use .NET LINQ to retrieve the first or default category object,
            //then padd the id as a generic entity which matches the category ID
            var objFromDb = _db.CoverTypes.FirstOrDefault(s => s.Id == coverType.Id);
            if (objFromDb != null) //save changes if not null
            {
                objFromDb.Name = coverType.Name;
            }
        }
    }
}
