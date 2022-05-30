using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace AwesomeBookmarks.Data
{
    public class User
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public List<Bookmark> Bookmarks { get; set; }
        [JsonIgnore] 
        public string PasswordHash { get; set; }
    }
}
