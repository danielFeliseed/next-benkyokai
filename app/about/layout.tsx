export default function AboutLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
      
        <div className="flex">
            <select className="" name="people" id="people" multiple>
                <option value="John Doe">John Doe</option>
                <option value="Jane Doe">Jane Doe</option>
                <option value="John Smith">John Smith</option>
                <option value="Jane Smith">Jane Smith</option>
                <option value="John Johnson">John Johnson</option>
            </select>
            {children}
        </div>
        
    );
    }