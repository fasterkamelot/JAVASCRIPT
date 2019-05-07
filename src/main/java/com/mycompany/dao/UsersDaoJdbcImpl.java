/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.dao;

import com.mycompany.models.User;


import java.sql.*;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import java.nio.channels.IllegalSelectorException;
import static java.util.Optional.empty;

/**
 *
 * @author user
 */
public class UsersDaoJdbcImpl implements UsersDao{
   private final String SQL_SELECT_ALL =
            "SELECT * FROM fix_user ";
    
    private final String SQL_SELECT_ALL =
            "SELECT * FROM fix_user WHERE id = ?";
    
    private Connection connection;
    
    public UsersDaoJdbcImpl(DataSourse dataSourse){
        try{
            this.connection=dataSourse.getConnection();
        }catch(SQLException e){
            throw new IllegalStateException(e);
        }
    }
   @Override 

    public List<User> findAllByFirstName(String firstName) {
    return null;
    }
    @Override 

    public Optional<User> find(Integer id) {
        try{
            PreparedStatement statement=connection.prepareStatement(SQL_SELECT_BY_ID);
           statement.setInt(1, id);
           ResultSet resultSet=statement.executeQuery();
           
           if(resultSet.next()){
               String firstName=resultSet.getString("first_name");
              String lastName=resultSet.getString("last_name");
               return Optional.of(new User(id, firstName, lastName));
               
           }
           return Optional.empty();
           
        }catch(SQLException e){
            throw new IllegalStateException(e);
            
        
    
    }
}
  @Override 

    public void save(User model){
}
     @Override 

    public void update(User model){
}
     @Override 

    public void delete(Integer id){
}
     @Override 

    public List<User> findAll(){
        try{
         List<User> users=new ArrayList<>();
         Statement statement=connection.createStatement();
         ResultSet resultSet=statement.executeQuery(SQL_SELECT_ALL);
            while (resultSet.next()) {
               Integer id = resultSet.getInt("id");
              String firstName=resultSet.getString("first_name") ; 
              String lastName=resultSet.getString("last_name") ;
             User user=new User(id, firstName, lastName);
             users.add(user);
            }
            return users;
        }catch(SQLException e){
            throw new IllegalStateException(e);
            
            
        }
    }
}


    

