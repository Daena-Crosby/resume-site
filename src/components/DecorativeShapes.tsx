const DecorativeShapes = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large pink circle - top right */}
      <div 
        className="shape-float absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-shape-pink opacity-60 blur-3xl"
      />
      
      {/* Blue circle - bottom left */}
      <div 
        className="shape-float-delayed absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-shape-blue opacity-50 blur-3xl"
      />
      
      {/* Small pink accent - mid right */}
      <div 
        className="shape-float absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-primary/20 blur-2xl"
        style={{ animationDelay: '-2s' }}
      />
      
      {/* Blue accent - mid left */}
      <div 
        className="shape-float absolute left-1/4 top-2/3 h-40 w-40 rounded-full bg-secondary/20 blur-2xl"
        style={{ animationDelay: '-4s' }}
      />
      
      {/* Geometric shapes */}
      <div 
        className="shape-rotate absolute right-20 top-1/4 h-16 w-16 border-2 border-primary/30 opacity-40"
        style={{ transform: 'rotate(45deg)' }}
      />
      
      <div 
        className="shape-float absolute bottom-1/4 left-16 h-8 w-8 rounded-full border-2 border-secondary/40 opacity-50"
        style={{ animationDelay: '-1s' }}
      />
    </div>
  );
};

export default DecorativeShapes;
