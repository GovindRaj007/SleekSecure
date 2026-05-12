import BeforeAfterSlider from "@/components/service/BeforeAfterSlider";
import balconyBefore from "@/assets/home-before-installation.jpg";
import balconyAfter from "@/assets/home-after-installation.jpg";

const BeforeAfterShowcase = () => {
  return (
    <section>
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary">
            See the Transformation
          </h2>
        </div>

        {/* Before/After Slider and Features Side by Side for Large Screens */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 items-center">
          {/* Before/After Slider Card - Wider on Large Screens */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <BeforeAfterSlider
                beforeImg={balconyBefore}
                afterImg={balconyAfter}
                beforeLabel="Before"
                afterLabel="After"
              />
            </div>
          </div>
          
          {/* Features Beside Slider */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="text-2xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-secondary-foreground">Safety & Security</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="text-2xl font-bold text-accent mb-2">Invisible</div>
              <p className="text-sm text-secondary-foreground">Design</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="text-2xl font-bold text-accent mb-2">Crystal</div>
              <p className="text-sm text-secondary-foreground">Clear Views</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="text-2xl font-bold text-accent mb-2">Durable</div>
              <p className="text-sm text-secondary-foreground">SS316 Build</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;
