import java.util.*;


public class MemberList
{
    private ArrayList < Member> members;

    /**
     * Create a Member. 
     */
    public MemberList()
    {
        members = new ArrayList < Member>();
    }

    /**
     * Add a member to this member list.
     * @param member the member to be added
     */
    public void addMember(Member member)
    {
        members.add(member);
    }

    /**
     * Return the number of members currently held.
     * 
     * @return the number of members
     */
    public int getNumberOfMembers()
    {
        return members.size();
    }

    
    /**
     * Provides a list of members. 
     * 
     * @return a list of members
     */
    public String toString()
    {
        String myString = "Membership List " ;
        myString = myString + "\nNumber of members: " 
                            + getNumberOfMembers() +"\n";
        
        if (getNumberOfMembers() > 0 )
        {
            for (Member member : members)
            {
                myString = myString + member.toString() + "\n";
            }
        }      
        return myString;
    }   

    /**
     * removes a member from the list.
     * @param memNo The name of the member to be deleted
     * @return true if member deleted otherwise false
     */
    public boolean removeMember(String memNo)
    {
        int index = 0;
        for (Member member : members)
        {
            if (memNo.equals(member.getMemNo()))
            {
                members.remove(index);
                return true;
            }
            index++;
        }
        return false;
    }       
}
