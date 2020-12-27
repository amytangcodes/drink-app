class DrinksController < ApiController

  # GET /drinks
  def index
    # @drinks = Drink.all  // this would select ALL information available to each drink
    @drinks = Drink.select("id, title").all  # let's grab only the id and title for each drink
    render json: @drinks.to_json
  end

  # GET /drinks/:id
  def show
    # @drink = Drink.select("id, title", "description").find(params[:id]) # if you want to be selective on what to show

    @drink = Drink.find(params[:id])
    render json: @drink.to_json(:include => { :ingredients => { :only => [:id, :description] }})
  end

end