import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('little_lemon');

export async function createTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'create table if not exists menuitems (id integer primary key not null, uuid text, title text, price text, category text);',
          [],
          (_, resultSet) => resolve(resultSet),
          (_, error) => reject(error)
        );
      }
    );
  });
}

export async function getMenuItems() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql('select * from menuitems', [], (_, { rows }) => {
        resolve(rows._array);
      });
    });
  });
}

export function saveMenuItems(menuItems) {
  db.transaction((tx) => {
    menuItems.menu.forEach((menuItem)=>{
      tx.executeSql(`insert into menuitems (uuid, title, price, category) values (?, ?, ?, ?)`,[
        menuItem.id,
        menuItem.title,
        menuItem.price,
        menuItem.category.title,
      ])
    })
  });
}

/**
 * 4. Implement a transaction that executes a SQL statement to filter the menu by 2 criteria:
 * a query string and a list of categories.
 *
 * The query string should be matched against the menu item titles to see if it's a substring.
 * For example, if there are 4 items in the database with titles: 'pizza, 'pasta', 'french fries' and 'salad'
 * the query 'a' should return 'pizza' 'pasta' and 'salad', but not 'french fries'
 * since the latter does not contain any 'a' substring anywhere in the sequence of characters.
 *
 * The activeCategories parameter represents an array of selected 'categories' from the filter component
 * All results should belong to an active category to be retrieved.
 * For instance, if 'pizza' and 'pasta' belong to the 'Main Dishes' category and 'french fries' and 'salad' to the 'Sides' category,
 * a value of ['Main Dishes'] for active categories should return  only'pizza' and 'pasta'
 *
 * Finally, the SQL statement must support filtering by both criteria at the same time.
 * That means if the query is 'a' and the active category 'Main Dishes', the SQL statement should return only 'pizza' and 'pasta'
 * 'french fries' is excluded because it's part of a different category and 'salad' is excluded due to the same reason,
 * even though the query 'a' it's a substring of 'salad', so the combination of the two filters should be linked with the AND keyword
 *
 */
export async function filterByQueryAndCategories(activeCategories) {
  return new Promise((resolve) => {
    let conditions = []; // Array to store conditions for each category

    // Loop through each category and add condition if it's active
    if (activeCategories["Appetizers"]) {
      conditions.push("category='Appetizers'");
    }
    if (activeCategories["Salads"]) {
      conditions.push("category='Salads'");
    }
    if (activeCategories["Beverages"]) {
      conditions.push("category='Beverages'");
    }

    // Construct the WHERE clause based on the active categories
    let whereClause = conditions.length > 0 ? "WHERE " + conditions.join(" OR ") : "";

    if(whereClause==="")resolve([])
    db.transaction((tx) => {
      const query=`SELECT * FROM menuitems ${whereClause}`
      console.log(query)
      tx.executeSql(query, [], (_, { rows }) => {
        console.log(rows)
        resolve(rows._array);
      });
    });
  });
}
