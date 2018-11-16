
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
/**
 * A GUI for the Member arrayList
 *
 * @Gabriel Lovett
 * @1
 */
public class MemberGUI extends JFrame implements ActionListener

{
    // instance variables - replace the example below with your own
    private JPanel buttonPanel;
    private JButton jbtAdd;
    private JButton jbtNumber;
    private JButton jbtQuit;
    private JLabel jlbFName;
    private JLabel jlbLName;
    private JLabel jlbMemNo;
    private JTextField jtfFName;
    private JTextField jtfLName;
    private JTextField jtfMemNo;
    private MemberList members;
    private static int nextMemNo;
    private JPanel textPanel;
    

    /**
     * Constructor for objects of class MemberGUI
     */
    public MemberGUI()
    {
        makeFrame();
        showFrame();
        nextMemNo = 1001;
        members = new MemberList();
    }
    
    public void actionPerformed(ActionEvent e)
    {
        if(e.getActionCommand().equals("Add Member"))
        {
            if(jtfFName.equals("") && jtfLName.equals(""))
            {
                jlbMemNo.setText("No names");
            }
            
            else if(jtfFName.equals(""))
            {
                jlbMemNo.setText("No first name");
            }
            
            else if(jtfLName.equals(""))
            {
                jlbMemNo.setText("No last name");
            }
            
            else
            {
                jbtNumber.setEnabled(false);
                jlbMemNo.setText("Member Number");
                jtfMemNo.setText(""+ nextMemNo);
                jbtAdd.setText("Confirm");
            }
        }
        
        if(e.getActionCommand().equals("Confirm"))
        {
            String Fname = jlbFName.getText();
            String Lname = jlbLName.getText();
            String memNoString = ("" + nextMemNo);
            members.addMember(new Member (Fname, Lname, memNoString));
            jbtNumber.setEnabled(true);
            jlbMemNo.setText("");
            jtfFName.setText("");
            jtfLName.setText("");
            jtfMemNo.setText("");
            jbtAdd.setText("Add Member");
            nextMemNo++;
        }
        
        if(e.getActionCommand().equals("No. Of Members"))
        {
            String memNoString = ("" + nextMemNo);
            jbtAdd.setEnabled(false);
            jbtNumber.setText("Clear number");
            jlbMemNo.setText("No. Of Members");
            jtfMemNo.setText(memNoString.substring(3));
        }
        
        if(e.getActionCommand().equals("Clear number"))
        {
            jbtNumber.setText("No. Of Members");
            jlbMemNo.setText("");
            jtfMemNo.setText("");
            jbtAdd.setEnabled(true);
        }
        
        if(e.getActionCommand().equals("Quit"))
        {
            System.exit(0);
        }
    }
    
    private void createButtonPanel()
    {
        buttonPanel = new JPanel();
        buttonPanel.setLayout(new GridLayout(0,3));
        
        jbtAdd = new JButton("Add Member");
        jbtNumber = new JButton("No. Of Members");
        jbtQuit = new JButton("Quit");
        
        buttonPanel.add(jbtAdd);
        buttonPanel.add(jbtNumber);
        buttonPanel.add(jbtQuit);
        
        

    }
    
    private void createTextPanel()
    {
        textPanel = new JPanel();
        textPanel.setLayout(new GridLayout(3,2));
        
        jlbFName = new JLabel("First Name");
        jlbFName.setHorizontalAlignment(jlbFName.RIGHT);
        jtfFName = new JTextField(15);

        
        jlbLName = new JLabel("Last Name");
        jlbLName.setHorizontalAlignment(jlbLName.RIGHT);
        jtfLName = new JTextField(15);
        
        jlbMemNo = new JLabel("");
        jlbMemNo.setHorizontalAlignment(jlbMemNo.RIGHT);
        jtfMemNo = new JTextField(15);
        jtfMemNo.setEditable(false); 
        
        textPanel.add(jlbFName);
        textPanel.add(jtfFName);
        textPanel.add(jlbLName);
        textPanel.add(jtfLName);
        textPanel.add(jlbMemNo);
        textPanel.add(jtfMemNo);
        


    }
    
    private void makeFrame()
    {
        setLayout(new BorderLayout());
        createButtonPanel();
        createTextPanel();    
        add(textPanel,BorderLayout.EAST);
        add(buttonPanel,BorderLayout.SOUTH);
        
        jtfFName.addActionListener( this );
        jtfLName.addActionListener( this );
        jbtAdd.addActionListener( this ); 
        jbtNumber.addActionListener( this ); 
        jbtQuit.addActionListener( this ); 
        
    }
    
    private void showFrame()
    {
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE );
        setSize(400, 200);  
        setLocationRelativeTo( null);    
        setVisible( true ); 
    }
    

}