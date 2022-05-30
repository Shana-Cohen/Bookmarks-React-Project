using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace AwesomeBookmarks.Data
{
    public class Bookmark
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string URL { get; set; }
        public int UserID { get; set; }

        [JsonIgnore]
        public User User { get; set; }
    }
}
