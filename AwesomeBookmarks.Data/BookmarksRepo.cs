using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AwesomeBookmarks.Data
{
    public class BookmarksRepo
    {
        private string _connectionString;

        public BookmarksRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddBookmark(Bookmark bookmark)
        {
            using var context = new BookmarksDataContext(_connectionString);
            context.Add(bookmark);
            context.SaveChanges();
        }

        public void UpdateBookmark(Bookmark bookmark)
        {
            using var context = new BookmarksDataContext(_connectionString);
            context.Update(bookmark);
            context.SaveChanges();
        }

        public void DeleteBookmark(int id)
        {
            using var context = new BookmarksDataContext(_connectionString);
            context.Remove(context.Bookmarks.FirstOrDefault(b => b.ID == id));
            context.SaveChanges();
        }

        public List<Bookmark> GetByUserID(int id)
        {
            using var context = new BookmarksDataContext(_connectionString);
            return context.Bookmarks.Where(b => b.UserID == id).ToList();
        }

        public List<TopBookmark> GetTopBookmarks()
        {
            using var context = new BookmarksDataContext(_connectionString);
            return context.Bookmarks.GroupBy(b => b.URL).Select(b => new TopBookmark
            {
                URL = b.Key,
                Count = b.Count()
            }).OrderByDescending(b => b.Count).Take(5).ToList();
        }
    }
}